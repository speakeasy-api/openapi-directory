import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatetagmodel as shared_updatetagmodel
from ..shared import tagmodel as shared_tagmodel
from ..shared import tagmodel_haljson as shared_tagmodel_haljson


@dataclasses.dataclass
class UpdateTagPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTagRequests:
    update_tag_model: Optional[shared_updatetagmodel.UpdateTagModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_tag_model1: Optional[shared_updatetagmodel.UpdateTagModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_tag_model2: Optional[shared_updatetagmodel.UpdateTagModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateTagRequest:
    path_params: UpdateTagPathParams = dataclasses.field()
    request: UpdateTagRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_model: Optional[shared_tagmodel.TagModel] = dataclasses.field(default=None)
    tag_model_haljson: Optional[shared_tagmodel_haljson.TagModelHaljson] = dataclasses.field(default=None)
    
