import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import associateteammemberrequest as shared_associateteammemberrequest
from ..shared import associateteammemberresult as shared_associateteammemberresult

class AssociateTeamMemberXAmzTargetEnum(str, Enum):
    CODE_STAR_20170419_ASSOCIATE_TEAM_MEMBER = "CodeStar_20170419.AssociateTeamMember"


@dataclasses.dataclass
class AssociateTeamMemberHeaders:
    x_amz_target: AssociateTeamMemberXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AssociateTeamMemberRequest:
    headers: AssociateTeamMemberHeaders = dataclasses.field()
    request: shared_associateteammemberrequest.AssociateTeamMemberRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssociateTeamMemberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    associate_team_member_result: Optional[shared_associateteammemberresult.AssociateTeamMemberResult] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_service_role_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    project_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    project_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    team_member_already_associated_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
