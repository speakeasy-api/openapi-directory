import dataclasses
from typing import Optional
from ..shared import organizationmodel_haljson as shared_organizationmodel_haljson
from ..shared import organizationmodel as shared_organizationmodel


@dataclasses.dataclass
class GetOrganizationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_model_haljsons: Optional[list[shared_organizationmodel_haljson.OrganizationModelHaljson]] = dataclasses.field(default=None)
    organization_models: Optional[list[shared_organizationmodel.OrganizationModel]] = dataclasses.field(default=None)
    
