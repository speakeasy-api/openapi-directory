"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import deleteemailtemplateresponse as shared_deleteemailtemplateresponse
from typing import Any, Optional


@dataclasses.dataclass
class DeleteEmailTemplateRequest:
    
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'template-name', 'style': 'simple', 'explode': False }})
    r"""The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive."""  
    version: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    r"""<p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend=\\"templates-template-name-template-type-versions\\">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>"""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class DeleteEmailTemplateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""BadRequestException"""  
    delete_email_template_response: Optional[shared_deleteemailtemplateresponse.DeleteEmailTemplateResponse] = dataclasses.field(default=None)
    r"""Success"""  
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ForbiddenException"""  
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerErrorException"""  
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    r"""MethodNotAllowedException"""  
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NotFoundException"""  
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    r"""PayloadTooLargeException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    r"""TooManyRequestsException"""  
    