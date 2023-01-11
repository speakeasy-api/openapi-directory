import dataclasses
from typing import Optional
from ..shared import queryargprofiles as shared_queryargprofiles


@dataclasses.dataclass
class QueryArgProfileConfig:
    r"""QueryArgProfileConfig
    Configuration for query argument-profile mapping for field-level encryption.
    """
    
    forward_when_query_arg_profile_is_unknown: bool = dataclasses.field()
    query_arg_profiles: Optional[shared_queryargprofiles.QueryArgProfiles] = dataclasses.field(default=None)
    
