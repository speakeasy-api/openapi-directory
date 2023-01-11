import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateManagedPrefixListResultPrefixList:
    r"""CreateManagedPrefixListResultPrefixList
    Information about the prefix list.
    """
    
    address_family: Optional[dict[str, Any]] = dataclasses.field(default=None)
    max_entries: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    version: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateManagedPrefixListResult:
    prefix_list: Optional[CreateManagedPrefixListResultPrefixList] = dataclasses.field(default=None)
    
