import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CommunityProfileFilesCodeOfConductSimple:
    r"""CommunityProfileFilesCodeOfConductSimple
    Code of Conduct Simple
    """
    
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class CommunityProfileFilesCommunityHealthFile:
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class CommunityProfileFilesLicenseSimple:
    r"""CommunityProfileFilesLicenseSimple
    License Simple
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    spdx_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spdx_id') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    html_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    

@dataclass_json
@dataclasses.dataclass
class CommunityProfileFiles:
    code_of_conduct: CommunityProfileFilesCodeOfConductSimple = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code_of_conduct') }})
    contributing: CommunityProfileFilesCommunityHealthFile = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributing') }})
    issue_template: CommunityProfileFilesCommunityHealthFile = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_template') }})
    license: CommunityProfileFilesLicenseSimple = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    pull_request_template: CommunityProfileFilesCommunityHealthFile = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pull_request_template') }})
    readme: CommunityProfileFilesCommunityHealthFile = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('readme') }})
    

@dataclass_json
@dataclasses.dataclass
class CommunityProfile:
    r"""CommunityProfile
    Community Profile
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    documentation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    files: CommunityProfileFiles = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    health_percentage: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('health_percentage') }})
    updated_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    content_reports_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_reports_enabled') }})
    
