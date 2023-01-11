import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UserPermissions:
    change_password: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changePassword') }})
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    delete_form_data: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFormData') }})
    download: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    list: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    modify: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modify') }})
    notification: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    share: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('share') }})
    upload: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    view_form_data: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewFormData') }})
    
