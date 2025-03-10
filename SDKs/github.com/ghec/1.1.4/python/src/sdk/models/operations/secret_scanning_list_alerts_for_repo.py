"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import direction_enum as shared_direction_enum
from ..shared import secret_scanning_alert as shared_secret_scanning_alert
from ..shared import secret_scanning_alert_sort_enum as shared_secret_scanning_alert_sort_enum
from ..shared import secret_scanning_alert_state_enum as shared_secret_scanning_alert_state_enum
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class SecretScanningListAlertsForRepoRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    r"""A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty \\"after\\" query string."""  
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    r"""A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty \\"before\\" query string."""  
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    r"""The direction to sort the results by."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    resolution: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    r"""A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`."""  
    secret_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'secret_type', 'style': 'form', 'explode': True }})
    r"""A comma-separated list of secret types to return. By default all secret types are returned.
    See \"[Secret scanning patterns](https://docs.github.com/enterprise-cloud@latest//code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)\"
    for a complete list of secret types.
    """  
    sort: Optional[shared_secret_scanning_alert_sort_enum.SecretScanningAlertSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    r"""The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved."""  
    state: Optional[shared_secret_scanning_alert_state_enum.SecretScanningAlertStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    r"""Set to `open` or `resolved` to only list secret scanning alerts in a specific state."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SecretScanningListAlertsForRepo503ApplicationJSON:
    r"""Service unavailable"""
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('code'), 'exclude': lambda f: f is None }})  
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentation_url'), 'exclude': lambda f: f is None }})  
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class SecretScanningListAlertsForRepoResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    secret_scanning_alerts: Optional[list[shared_secret_scanning_alert.SecretScanningAlert]] = dataclasses.field(default=None)
    r"""Response"""  
    secret_scanning_list_alerts_for_repo_503_application_json_object: Optional[SecretScanningListAlertsForRepo503ApplicationJSON] = dataclasses.field(default=None)
    r"""Service unavailable"""  
    