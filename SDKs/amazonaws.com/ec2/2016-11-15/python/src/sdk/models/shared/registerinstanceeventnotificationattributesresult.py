import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute:
    r"""RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute
    The resulting set of tag keys.
    """
    
    include_all_tags_of_instance: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_tag_keys: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RegisterInstanceEventNotificationAttributesResult:
    instance_tag_attribute: Optional[RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute] = dataclasses.field(default=None)
    
