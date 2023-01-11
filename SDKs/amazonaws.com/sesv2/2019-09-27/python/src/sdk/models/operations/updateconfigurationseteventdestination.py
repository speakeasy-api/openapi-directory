import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchdestination as shared_cloudwatchdestination
from ..shared import kinesisfirehosedestination as shared_kinesisfirehosedestination
from ..shared import eventtype_enum as shared_eventtype_enum
from ..shared import pinpointdestination as shared_pinpointdestination
from ..shared import snsdestination as shared_snsdestination


@dataclasses.dataclass
class UpdateConfigurationSetEventDestinationPathParams:
    configuration_set_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConfigurationSetName', 'style': 'simple', 'explode': False }})
    event_destination_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EventDestinationName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateConfigurationSetEventDestinationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConfigurationSetEventDestinationRequestBodyEventDestination:
    r"""UpdateConfigurationSetEventDestinationRequestBodyEventDestination
    An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
    """
    
    cloud_watch_destination: Optional[shared_cloudwatchdestination.CloudWatchDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchDestination') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kinesis_firehose_destination: Optional[shared_kinesisfirehosedestination.KinesisFirehoseDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseDestination') }})
    matching_event_types: Optional[list[shared_eventtype_enum.EventTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchingEventTypes') }})
    pinpoint_destination: Optional[shared_pinpointdestination.PinpointDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PinpointDestination') }})
    sns_destination: Optional[shared_snsdestination.SnsDestination] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsDestination') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateConfigurationSetEventDestinationRequestBody:
    event_destination: UpdateConfigurationSetEventDestinationRequestBodyEventDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventDestination') }})
    

@dataclasses.dataclass
class UpdateConfigurationSetEventDestinationRequest:
    headers: UpdateConfigurationSetEventDestinationHeaders = dataclasses.field()
    path_params: UpdateConfigurationSetEventDestinationPathParams = dataclasses.field()
    request: UpdateConfigurationSetEventDestinationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateConfigurationSetEventDestinationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_configuration_set_event_destination_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
