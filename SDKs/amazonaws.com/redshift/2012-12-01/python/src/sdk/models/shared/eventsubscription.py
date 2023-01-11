import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import taglist as shared_taglist


@dataclasses.dataclass
class EventSubscription:
    r"""EventSubscription
    Describes event subscriptions.
    """
    
    cust_subscription_id: Optional[str] = dataclasses.field(default=None)
    customer_aws_id: Optional[str] = dataclasses.field(default=None)
    enabled: Optional[bool] = dataclasses.field(default=None)
    event_categories_list: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    severity: Optional[str] = dataclasses.field(default=None)
    sns_topic_arn: Optional[str] = dataclasses.field(default=None)
    source_ids_list: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    source_type: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    subscription_creation_time: Optional[datetime] = dataclasses.field(default=None)
    tags: Optional[list[shared_taglist.TagList]] = dataclasses.field(default=None)
    
