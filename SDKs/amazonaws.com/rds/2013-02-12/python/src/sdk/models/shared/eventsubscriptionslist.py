import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class EventSubscriptionsList:
    cust_subscription_id: Optional[str] = dataclasses.field(default=None)
    customer_aws_id: Optional[str] = dataclasses.field(default=None)
    enabled: Optional[bool] = dataclasses.field(default=None)
    event_categories_list: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    sns_topic_arn: Optional[str] = dataclasses.field(default=None)
    source_ids_list: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    source_type: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    subscription_creation_time: Optional[str] = dataclasses.field(default=None)
    
