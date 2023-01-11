import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addattributesactivity as shared_addattributesactivity
from ..shared import channelactivity as shared_channelactivity
from ..shared import datastoreactivity as shared_datastoreactivity
from ..shared import deviceregistryenrichactivity as shared_deviceregistryenrichactivity
from ..shared import deviceshadowenrichactivity as shared_deviceshadowenrichactivity
from ..shared import filteractivity as shared_filteractivity
from ..shared import lambdaactivity as shared_lambdaactivity
from ..shared import mathactivity as shared_mathactivity
from ..shared import removeattributesactivity as shared_removeattributesactivity
from ..shared import selectattributesactivity as shared_selectattributesactivity
from ..shared import runpipelineactivityresponse as shared_runpipelineactivityresponse


@dataclasses.dataclass
class RunPipelineActivityHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RunPipelineActivityRequestBodyPipelineActivity:
    r"""RunPipelineActivityRequestBodyPipelineActivity
    An activity that performs a transformation on a message.
    """
    
    add_attributes: Optional[shared_addattributesactivity.AddAttributesActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAttributes') }})
    channel: Optional[shared_channelactivity.ChannelActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    datastore: Optional[shared_datastoreactivity.DatastoreActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datastore') }})
    device_registry_enrich: Optional[shared_deviceregistryenrichactivity.DeviceRegistryEnrichActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRegistryEnrich') }})
    device_shadow_enrich: Optional[shared_deviceshadowenrichactivity.DeviceShadowEnrichActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceShadowEnrich') }})
    filter: Optional[shared_filteractivity.FilterActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    lambda_: Optional[shared_lambdaactivity.LambdaActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambda') }})
    math: Optional[shared_mathactivity.MathActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('math') }})
    remove_attributes: Optional[shared_removeattributesactivity.RemoveAttributesActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAttributes') }})
    select_attributes: Optional[shared_selectattributesactivity.SelectAttributesActivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectAttributes') }})
    

@dataclass_json
@dataclasses.dataclass
class RunPipelineActivityRequestBody:
    payloads: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloads') }})
    pipeline_activity: RunPipelineActivityRequestBodyPipelineActivity = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineActivity') }})
    

@dataclasses.dataclass
class RunPipelineActivityRequest:
    headers: RunPipelineActivityHeaders = dataclasses.field()
    request: RunPipelineActivityRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RunPipelineActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    run_pipeline_activity_response: Optional[shared_runpipelineactivityresponse.RunPipelineActivityResponse] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
