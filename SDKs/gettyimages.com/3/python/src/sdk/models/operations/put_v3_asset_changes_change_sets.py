import dataclasses
from typing import Optional
from ..shared import assetchanges as shared_assetchanges


@dataclasses.dataclass
class PutV3AssetChangesChangeSetsQueryParams:
    batch_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'batch_size', 'style': 'form', 'explode': True }})
    channel_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'channel_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PutV3AssetChangesChangeSetsRequest:
    query_params: PutV3AssetChangesChangeSetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PutV3AssetChangesChangeSetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_changes: Optional[shared_assetchanges.AssetChanges] = dataclasses.field(default=None)
    
