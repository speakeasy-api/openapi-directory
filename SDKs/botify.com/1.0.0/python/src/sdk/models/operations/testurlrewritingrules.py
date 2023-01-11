import dataclasses
from typing import Optional
from ..shared import defaultpayload as shared_defaultpayload
from ..shared import urlrewritingrulesserializer as shared_urlrewritingrulesserializer


@dataclasses.dataclass
class TestURLRewritingRulesPathParams:
    project_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_slug', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TestURLRewritingRulesRequest:
    path_params: TestURLRewritingRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TestURLRewritingRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_payload: Optional[shared_defaultpayload.DefaultPayload] = dataclasses.field(default=None)
    url_rewriting_rules_serializer: Optional[shared_urlrewritingrulesserializer.URLRewritingRulesSerializer] = dataclasses.field(default=None)
    
