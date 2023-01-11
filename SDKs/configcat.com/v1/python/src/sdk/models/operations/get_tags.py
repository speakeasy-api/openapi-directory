import dataclasses
from typing import Optional
from ..shared import tagmodel_haljson as shared_tagmodel_haljson
from ..shared import tagmodel as shared_tagmodel


@dataclasses.dataclass
class GetTagsPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagsRequest:
    path_params: GetTagsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_model_haljsons: Optional[list[shared_tagmodel_haljson.TagModelHaljson]] = dataclasses.field(default=None)
    tag_models: Optional[list[shared_tagmodel.TagModel]] = dataclasses.field(default=None)
    
