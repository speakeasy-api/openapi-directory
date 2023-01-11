import dataclasses
from typing import Optional
from ..shared import bundleregistrationentity as shared_bundleregistrationentity


@dataclasses.dataclass
class GetBundleRegistrationsQueryParams:
    bundle_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'bundle_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetBundleRegistrationsRequest:
    query_params: GetBundleRegistrationsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBundleRegistrationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bundle_registration_entities: Optional[list[shared_bundleregistrationentity.BundleRegistrationEntity]] = dataclasses.field(default=None)
    
