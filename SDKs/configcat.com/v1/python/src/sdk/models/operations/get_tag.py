import dataclasses
from typing import Optional
from ..shared import tagmodel as shared_tagmodel
from ..shared import tagmodel_haljson as shared_tagmodel_haljson


@dataclasses.dataclass
class GetTagPathParams:
    tag_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagRequest:
    path_params: GetTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_model: Optional[shared_tagmodel.TagModel] = dataclasses.field(default=None)
    tag_model_haljson: Optional[shared_tagmodel_haljson.TagModelHaljson] = dataclasses.field(default=None)
    
