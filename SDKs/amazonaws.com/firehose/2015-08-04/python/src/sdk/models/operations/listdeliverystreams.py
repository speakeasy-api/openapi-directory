import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import listdeliverystreamsinput as shared_listdeliverystreamsinput
from ..shared import listdeliverystreamsoutput as shared_listdeliverystreamsoutput

class ListDeliveryStreamsXAmzTargetEnum(str, Enum):
    FIREHOSE_20150804_LIST_DELIVERY_STREAMS = "Firehose_20150804.ListDeliveryStreams"


@dataclasses.dataclass
class ListDeliveryStreamsHeaders:
    x_amz_target: ListDeliveryStreamsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDeliveryStreamsRequest:
    headers: ListDeliveryStreamsHeaders = dataclasses.field()
    request: shared_listdeliverystreamsinput.ListDeliveryStreamsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDeliveryStreamsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_delivery_streams_output: Optional[shared_listdeliverystreamsoutput.ListDeliveryStreamsOutput] = dataclasses.field(default=None)
    
