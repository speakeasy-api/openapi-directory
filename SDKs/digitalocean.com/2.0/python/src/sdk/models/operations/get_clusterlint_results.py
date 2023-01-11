import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetClusterlintResultsPathParams:
    cluster_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetClusterlintResultsQueryParams:
    run_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'run_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetClusterlintResults200ApplicationJSONDiagnosticsObject:
    r"""GetClusterlintResults200ApplicationJSONDiagnosticsObject
    Metadata about the Kubernetes API object the diagnostic is reported on.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClusterlintResults200ApplicationJSONDiagnostics:
    check_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_name') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    object: Optional[GetClusterlintResults200ApplicationJSONDiagnosticsObject] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    severity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClusterlintResults200ApplicationJSON:
    completed_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    diagnostics: Optional[list[GetClusterlintResults200ApplicationJSONDiagnostics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnostics') }})
    requested_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetClusterlintResults401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetClusterlintResultsRequest:
    path_params: GetClusterlintResultsPathParams = dataclasses.field()
    query_params: GetClusterlintResultsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClusterlintResultsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_clusterlint_results_200_application_json_object: Optional[GetClusterlintResults200ApplicationJSON] = dataclasses.field(default=None)
    get_clusterlint_results_401_application_json_object: Optional[GetClusterlintResults401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
