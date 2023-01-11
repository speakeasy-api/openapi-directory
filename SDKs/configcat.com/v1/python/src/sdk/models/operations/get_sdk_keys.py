import dataclasses
from typing import Optional
from ..shared import sdkkeysmodel as shared_sdkkeysmodel


@dataclasses.dataclass
class GetSDKKeysPathParams:
    config_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSDKKeysRequest:
    path_params: GetSDKKeysPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSDKKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sdk_keys_model: Optional[shared_sdkkeysmodel.SDKKeysModel] = dataclasses.field(default=None)
    
