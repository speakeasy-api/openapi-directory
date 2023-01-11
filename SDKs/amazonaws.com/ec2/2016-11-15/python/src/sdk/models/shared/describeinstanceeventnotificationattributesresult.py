import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute:
    r"""DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute
    Information about the registered tag keys.
    """
    
    include_all_tags_of_instance: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_tag_keys: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DescribeInstanceEventNotificationAttributesResult:
    instance_tag_attribute: Optional[DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute] = dataclasses.field(default=None)
    
