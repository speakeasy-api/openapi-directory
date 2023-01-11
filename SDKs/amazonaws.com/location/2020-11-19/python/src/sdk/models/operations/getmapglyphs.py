import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import getmapglyphsresponse as shared_getmapglyphsresponse


@dataclasses.dataclass
class GetMapGlyphsPathParams:
    font_stack: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FontStack', 'style': 'simple', 'explode': False }})
    font_unicode_range: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FontUnicodeRange', 'style': 'simple', 'explode': False }})
    map_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MapName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapGlyphsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMapGlyphsRequest:
    headers: GetMapGlyphsHeaders = dataclasses.field()
    path_params: GetMapGlyphsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMapGlyphsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_map_glyphs_response: Optional[shared_getmapglyphsresponse.GetMapGlyphsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
