"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import deletednode as shared_deletednode
from ..shared import errorresponse as shared_errorresponse
from enum import Enum
from typing import Optional

class RequestDeletedNodeXSdsDateFormatEnum(str, Enum):
    r"""Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))"""
    UTC = 'UTC'
    LOCAL = 'LOCAL'
    OFFSET = 'OFFSET'
    EPOCH = 'EPOCH'
    LEET = 'LEET'


@dataclasses.dataclass
class RequestDeletedNodeRequest:
    
    deleted_node_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deleted_node_id', 'style': 'simple', 'explode': False }})
    r"""Deleted node ID"""  
    x_sds_auth_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    r"""Authentication token"""  
    x_sds_date_format: Optional[RequestDeletedNodeXSdsDateFormatEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    r"""Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))"""  
    

@dataclasses.dataclass
class RequestDeletedNodeResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    deleted_node: Optional[shared_deletednode.DeletedNode] = dataclasses.field(default=None)
    r"""OK"""  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""Bad Request"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    