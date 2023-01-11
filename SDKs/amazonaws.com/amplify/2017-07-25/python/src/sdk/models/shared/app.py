import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autobranchcreationconfig as shared_autobranchcreationconfig
from ..shared import customrule as shared_customrule
from ..shared import platform_enum as shared_platform_enum
from ..shared import productionbranch as shared_productionbranch


@dataclass_json
@dataclasses.dataclass
class App:
    r"""App
     Represents the different branches of a repository for building, deploying, and hosting an Amplify app. 
    """
    
    app_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appArn') }})
    app_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    create_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_domain: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDomain') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_basic_auth: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBasicAuth') }})
    enable_branch_auto_build: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBranchAutoBuild') }})
    environment_variables: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentVariables') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: shared_platform_enum.PlatformEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    repository: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    update_time: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auto_branch_creation_config: Optional[shared_autobranchcreationconfig.AutoBranchCreationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBranchCreationConfig') }})
    auto_branch_creation_patterns: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoBranchCreationPatterns') }})
    basic_auth_credentials: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicAuthCredentials') }})
    build_spec: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildSpec') }})
    custom_headers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHeaders') }})
    custom_rules: Optional[list[shared_customrule.CustomRule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customRules') }})
    enable_auto_branch_creation: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAutoBranchCreation') }})
    enable_branch_auto_deletion: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableBranchAutoDeletion') }})
    iam_service_role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamServiceRoleArn') }})
    production_branch: Optional[shared_productionbranch.ProductionBranch] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productionBranch') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
