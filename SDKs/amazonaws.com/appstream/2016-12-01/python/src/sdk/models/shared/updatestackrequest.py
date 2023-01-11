import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accessendpoint as shared_accessendpoint
from ..shared import applicationsettings as shared_applicationsettings
from ..shared import stackattribute_enum as shared_stackattribute_enum
from ..shared import storageconnector as shared_storageconnector
from ..shared import usersetting as shared_usersetting


@dataclass_json
@dataclasses.dataclass
class UpdateStackRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    access_endpoints: Optional[list[shared_accessendpoint.AccessEndpoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessEndpoints') }})
    application_settings: Optional[shared_applicationsettings.ApplicationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSettings') }})
    attributes_to_delete: Optional[list[shared_stackattribute_enum.StackAttributeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToDelete') }})
    delete_storage_connectors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteStorageConnectors') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    embed_host_domains: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmbedHostDomains') }})
    feedback_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FeedbackURL') }})
    redirect_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RedirectURL') }})
    storage_connectors: Optional[list[shared_storageconnector.StorageConnector]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageConnectors') }})
    user_settings: Optional[list[shared_usersetting.UserSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserSettings') }})
    
