import dataclasses
from typing import Optional
from ..shared import datashareassociation as shared_datashareassociation


@dataclasses.dataclass
class DataShare:
    allow_publicly_accessible_consumers: Optional[bool] = dataclasses.field(default=None)
    data_share_arn: Optional[str] = dataclasses.field(default=None)
    data_share_associations: Optional[list[shared_datashareassociation.DataShareAssociation]] = dataclasses.field(default=None)
    producer_arn: Optional[str] = dataclasses.field(default=None)
    
