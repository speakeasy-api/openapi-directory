import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createrepositoryinput as shared_createrepositoryinput
from ..shared import createrepositoryoutput as shared_createrepositoryoutput

class CreateRepositoryXAmzTargetEnum(str, Enum):
    CODE_COMMIT_20150413_CREATE_REPOSITORY = "CodeCommit_20150413.CreateRepository"


@dataclasses.dataclass
class CreateRepositoryHeaders:
    x_amz_target: CreateRepositoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateRepositoryRequest:
    headers: CreateRepositoryHeaders = dataclasses.field()
    request: shared_createrepositoryinput.CreateRepositoryInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateRepositoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_repository_output: Optional[shared_createrepositoryoutput.CreateRepositoryOutput] = dataclasses.field(default=None)
    encryption_integrity_checks_failed_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    encryption_key_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_description_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_repository_name_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_system_tag_usage_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tags_map_exception: Optional[Any] = dataclasses.field(default=None)
    repository_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_exists_exception: Optional[Any] = dataclasses.field(default=None)
    repository_name_required_exception: Optional[Any] = dataclasses.field(default=None)
    tag_policy_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_tags_exception: Optional[Any] = dataclasses.field(default=None)
    
