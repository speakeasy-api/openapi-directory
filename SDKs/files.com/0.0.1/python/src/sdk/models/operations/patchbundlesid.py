import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import bundleentity as shared_bundleentity


@dataclasses.dataclass
class PatchBundlesIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchBundlesIDRequestBody:
    clickwrap_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'clickwrap_id' }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'code' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'description' }})
    expires_at: Optional[datetime] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'expires_at' }})
    form_field_set_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'form_field_set_id' }})
    inbox_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'inbox_id' }})
    max_uses: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'max_uses' }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'note' }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    paths: Optional[list[str]] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'paths', 'json': True }})
    preview_only: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'preview_only' }})
    require_registration: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'require_registration' }})
    require_share_recipient: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'require_share_recipient' }})
    

@dataclasses.dataclass
class PatchBundlesIDRequest:
    path_params: PatchBundlesIDPathParams = dataclasses.field()
    request: Optional[PatchBundlesIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchBundlesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bundle_entity: Optional[shared_bundleentity.BundleEntity] = dataclasses.field(default=None)
    
