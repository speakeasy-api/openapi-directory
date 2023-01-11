import dataclasses
from typing import Optional
from ..shared import createtagmodel as shared_createtagmodel
from ..shared import tagmodel as shared_tagmodel
from ..shared import tagmodel_haljson as shared_tagmodel_haljson


@dataclasses.dataclass
class CreateTagPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTagRequests:
    create_tag_model: Optional[shared_createtagmodel.CreateTagModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_tag_model1: Optional[shared_createtagmodel.CreateTagModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_tag_model2: Optional[shared_createtagmodel.CreateTagModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreateTagRequest:
    path_params: CreateTagPathParams = dataclasses.field()
    request: CreateTagRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_model: Optional[shared_tagmodel.TagModel] = dataclasses.field(default=None)
    tag_model_haljson: Optional[shared_tagmodel_haljson.TagModelHaljson] = dataclasses.field(default=None)
    
