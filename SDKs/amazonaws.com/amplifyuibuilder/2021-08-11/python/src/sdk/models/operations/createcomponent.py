"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import componentbindingpropertiesvalue as shared_componentbindingpropertiesvalue
from ..shared import componentchild as shared_componentchild
from ..shared import componentdataconfiguration as shared_componentdataconfiguration
from ..shared import componentevent as shared_componentevent
from ..shared import componentvariant as shared_componentvariant
from ..shared import createcomponentresponse as shared_createcomponentresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateComponentRequestBodyComponentToCreate:
    r"""Represents all of the information that is required to create a component."""
    
    binding_properties: Optional[dict[str, shared_componentbindingpropertiesvalue.ComponentBindingPropertiesValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bindingProperties'), 'exclude': lambda f: f is None }})  
    children: Optional[list[shared_componentchild.ComponentChild]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('children'), 'exclude': lambda f: f is None }})  
    collection_properties: Optional[dict[str, shared_componentdataconfiguration.ComponentDataConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('collectionProperties'), 'exclude': lambda f: f is None }})  
    component_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('componentType'), 'exclude': lambda f: f is None }})  
    events: Optional[dict[str, shared_componentevent.ComponentEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('events'), 'exclude': lambda f: f is None }})  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})  
    overrides: Optional[dict[str, dict[str, str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('overrides'), 'exclude': lambda f: f is None }})  
    properties: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('properties'), 'exclude': lambda f: f is None }})
    r"""Describes the component's properties."""  
    schema_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schemaVersion'), 'exclude': lambda f: f is None }})  
    source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sourceId'), 'exclude': lambda f: f is None }})  
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tags'), 'exclude': lambda f: f is None }})  
    variants: Optional[list[shared_componentvariant.ComponentVariant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('variants'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateComponentRequestBody:
    
    component_to_create: CreateComponentRequestBodyComponentToCreate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('componentToCreate') }})
    r"""Represents all of the information that is required to create a component."""  
    

@dataclasses.dataclass
class CreateComponentRequest:
    
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    r"""The unique ID of the Amplify app to associate with the component."""  
    environment_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentName', 'style': 'simple', 'explode': False }})
    r"""The name of the backend environment that is a part of the Amplify app."""  
    request_body: CreateComponentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    r"""The unique client token."""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateComponentResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    create_component_response: Optional[shared_createcomponentresponse.CreateComponentResponse] = dataclasses.field(default=None)
    r"""Success"""  
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerException"""  
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidParameterException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceConflictException"""  
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ServiceQuotaExceededException"""  
    