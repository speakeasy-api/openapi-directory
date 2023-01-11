import dataclasses
from typing import Optional


@dataclasses.dataclass
class PartialFailure:
    r"""PartialFailure
    This array is empty if the API operation was successful for all the rules specified in the request. If the operation could not process one of the rules, the following data is returned for each of those rules.
    """
    
    exception_type: Optional[str] = dataclasses.field(default=None)
    failure_code: Optional[str] = dataclasses.field(default=None)
    failure_description: Optional[str] = dataclasses.field(default=None)
    failure_resource: Optional[str] = dataclasses.field(default=None)
    
