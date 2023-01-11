import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import androidpushnotificationtemplate as shared_androidpushnotificationtemplate
from ..shared import apnspushnotificationtemplate as shared_apnspushnotificationtemplate
from ..shared import defaultpushnotificationtemplate as shared_defaultpushnotificationtemplate
from ..shared import templatetype_enum as shared_templatetype_enum


@dataclass_json
@dataclasses.dataclass
class PushNotificationTemplateResponse:
    r"""PushNotificationTemplateResponse
    Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
    """
    
    creation_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    template_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_type: shared_templatetype_enum.TemplateTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateType') }})
    adm: Optional[shared_androidpushnotificationtemplate.AndroidPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ADM') }})
    apns: Optional[shared_apnspushnotificationtemplate.ApnsPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNS') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    baidu: Optional[shared_androidpushnotificationtemplate.AndroidPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Baidu') }})
    default: Optional[shared_defaultpushnotificationtemplate.DefaultPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Default') }})
    default_substitutions: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubstitutions') }})
    gcm: Optional[shared_androidpushnotificationtemplate.AndroidPushNotificationTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GCM') }})
    recommender_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommenderId') }})
    template_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
