import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import migration as shared_migration
from ..shared import validation_error as shared_validation_error

class MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum(str, Enum):
    REPOSITORIES = "repositories"


@dataclass_json
@dataclasses.dataclass
class MigrationsStartForAuthenticatedUserRequestBody:
    repositories: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    exclude: Optional[list[MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    exclude_attachments: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude_attachments') }})
    lock_repositories: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lock_repositories') }})
    

@dataclasses.dataclass
class MigrationsStartForAuthenticatedUserRequest:
    request: Optional[MigrationsStartForAuthenticatedUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MigrationsStartForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    migration: Optional[shared_migration.Migration] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
