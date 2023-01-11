import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputInfoLicense:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputInfo:
    license: Optional[ImportExternalAPISpecificationRequestBodyInputInfoLicense] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema:
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    in_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    required: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    schema: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParametersSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode:
    format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage:
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties:
    code: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaPropertiesMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema:
    properties: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchemaProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    required: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON:
    schema: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSONSchema] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent:
    application_json: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContentApplicationJSON] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('application/json') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault:
    content: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefaultContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses:
    default: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponsesDefault] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPetsGet:
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    parameters: Optional[list[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetParameters]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    responses: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGetResponses] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    summary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPathsPets:
    get: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPetsGet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('get') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputPaths:
    root_pets: Optional[ImportExternalAPISpecificationRequestBodyInputPathsPets] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('/pets') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInputServers:
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBodyInput:
    info: Optional[ImportExternalAPISpecificationRequestBodyInputInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    openapi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openapi') }})
    paths: Optional[ImportExternalAPISpecificationRequestBodyInputPaths] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    servers: Optional[list[ImportExternalAPISpecificationRequestBodyInputServers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecificationRequestBody:
    input: Optional[ImportExternalAPISpecificationRequestBodyInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecification200ApplicationJSONCollections:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecification200ApplicationJSON:
    collections: Optional[list[ImportExternalAPISpecification200ApplicationJSONCollections]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collections') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecification400ApplicationJSONErrorDetails:
    param: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('param') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecification400ApplicationJSONError:
    details: Optional[ImportExternalAPISpecification400ApplicationJSONErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ImportExternalAPISpecification400ApplicationJSON:
    error: Optional[ImportExternalAPISpecification400ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class ImportExternalAPISpecificationRequest:
    request: Optional[ImportExternalAPISpecificationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ImportExternalAPISpecificationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    import_external_api_specification_200_application_json_object: Optional[ImportExternalAPISpecification200ApplicationJSON] = dataclasses.field(default=None)
    import_external_api_specification_400_application_json_object: Optional[ImportExternalAPISpecification400ApplicationJSON] = dataclasses.field(default=None)
    
