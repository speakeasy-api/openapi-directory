import dataclasses
from typing import Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class HsmConfiguration:
    r"""HsmConfiguration
    Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    hsm_configuration_identifier: Optional[str] = dataclasses.field(default=None)
    hsm_ip_address: Optional[str] = dataclasses.field(default=None)
    hsm_partition_name: Optional[str] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
