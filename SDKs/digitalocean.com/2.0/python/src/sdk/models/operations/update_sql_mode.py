import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1sql_mode_get_responses_200_content_application_1json_schema as shared_onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1sql_mode_get_responses_200_content_application_1json_schema
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class UpdateSQLModePathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateSQLMode401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateSQLModeRequest:
    path_params: UpdateSQLModePathParams = dataclasses.field()
    request: shared_onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1sql_mode_get_responses_200_content_application_1json_schema.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1sqlModeGetResponses200ContentApplication1jsonSchema = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateSQLModeResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_sql_mode_401_application_json_object: Optional[UpdateSQLMode401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
