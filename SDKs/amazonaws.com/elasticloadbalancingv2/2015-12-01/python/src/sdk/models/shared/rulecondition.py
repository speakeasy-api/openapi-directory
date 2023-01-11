import dataclasses
from typing import Optional
from ..shared import hostheaderconditionconfig as shared_hostheaderconditionconfig
from ..shared import httpheaderconditionconfig as shared_httpheaderconditionconfig
from ..shared import httprequestmethodconditionconfig as shared_httprequestmethodconditionconfig
from ..shared import pathpatternconditionconfig as shared_pathpatternconditionconfig
from ..shared import querystringconditionconfig as shared_querystringconditionconfig
from ..shared import sourceipconditionconfig as shared_sourceipconditionconfig


@dataclasses.dataclass
class RuleCondition:
    r"""RuleCondition
    <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
    """
    
    field: Optional[str] = dataclasses.field(default=None)
    host_header_config: Optional[shared_hostheaderconditionconfig.HostHeaderConditionConfig] = dataclasses.field(default=None)
    http_header_config: Optional[shared_httpheaderconditionconfig.HTTPHeaderConditionConfig] = dataclasses.field(default=None)
    http_request_method_config: Optional[shared_httprequestmethodconditionconfig.HTTPRequestMethodConditionConfig] = dataclasses.field(default=None)
    path_pattern_config: Optional[shared_pathpatternconditionconfig.PathPatternConditionConfig] = dataclasses.field(default=None)
    query_string_config: Optional[shared_querystringconditionconfig.QueryStringConditionConfig] = dataclasses.field(default=None)
    source_ip_config: Optional[shared_sourceipconditionconfig.SourceIPConditionConfig] = dataclasses.field(default=None)
    values: Optional[list[str]] = dataclasses.field(default=None)
    
