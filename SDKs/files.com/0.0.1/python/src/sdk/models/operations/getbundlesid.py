import dataclasses
from typing import Optional
from ..shared import bundleentity as shared_bundleentity


@dataclasses.dataclass
class GetBundlesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBundlesIDRequest:
    path_params: GetBundlesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBundlesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bundle_entity: Optional[shared_bundleentity.BundleEntity] = dataclasses.field(default=None)
    
