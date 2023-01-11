import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountrecoverysettingtype as shared_accountrecoverysettingtype
from ..shared import admincreateuserconfigtype as shared_admincreateuserconfigtype
from ..shared import aliasattributetype_enum as shared_aliasattributetype_enum
from ..shared import verifiedattributetype_enum as shared_verifiedattributetype_enum
from ..shared import deviceconfigurationtype as shared_deviceconfigurationtype
from ..shared import emailconfigurationtype as shared_emailconfigurationtype
from ..shared import lambdaconfigtype as shared_lambdaconfigtype
from ..shared import userpoolmfatype_enum as shared_userpoolmfatype_enum
from ..shared import userpoolpolicytype as shared_userpoolpolicytype
from ..shared import schemaattributetype as shared_schemaattributetype
from ..shared import smsconfigurationtype as shared_smsconfigurationtype
from ..shared import statustype_enum as shared_statustype_enum
from ..shared import userpooladdonstype as shared_userpooladdonstype
from ..shared import usernameattributetype_enum as shared_usernameattributetype_enum
from ..shared import usernameconfigurationtype as shared_usernameconfigurationtype
from ..shared import verificationmessagetemplatetype as shared_verificationmessagetemplatetype


@dataclass_json
@dataclasses.dataclass
class UserPoolType:
    r"""UserPoolType
    A container for information about the user pool.
    """
    
    account_recovery_setting: Optional[shared_accountrecoverysettingtype.AccountRecoverySettingType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountRecoverySetting') }})
    admin_create_user_config: Optional[shared_admincreateuserconfigtype.AdminCreateUserConfigType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminCreateUserConfig') }})
    alias_attributes: Optional[list[shared_aliasattributetype_enum.AliasAttributeTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasAttributes') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    auto_verified_attributes: Optional[list[shared_verifiedattributetype_enum.VerifiedAttributeTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoVerifiedAttributes') }})
    creation_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomDomain') }})
    device_configuration: Optional[shared_deviceconfigurationtype.DeviceConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceConfiguration') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Domain') }})
    email_configuration: Optional[shared_emailconfigurationtype.EmailConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailConfiguration') }})
    email_configuration_failure: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailConfigurationFailure') }})
    email_verification_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailVerificationMessage') }})
    email_verification_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmailVerificationSubject') }})
    estimated_number_of_users: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimatedNumberOfUsers') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    lambda_config: Optional[shared_lambdaconfigtype.LambdaConfigType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaConfig') }})
    last_modified_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mfa_configuration: Optional[shared_userpoolmfatype_enum.UserPoolMfaTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MfaConfiguration') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    policies: Optional[shared_userpoolpolicytype.UserPoolPolicyType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    schema_attributes: Optional[list[shared_schemaattributetype.SchemaAttributeType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaAttributes') }})
    sms_authentication_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsAuthenticationMessage') }})
    sms_configuration: Optional[shared_smsconfigurationtype.SmsConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfiguration') }})
    sms_configuration_failure: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsConfigurationFailure') }})
    sms_verification_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmsVerificationMessage') }})
    status: Optional[shared_statustype_enum.StatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    user_pool_add_ons: Optional[shared_userpooladdonstype.UserPoolAddOnsType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolAddOns') }})
    user_pool_tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolTags') }})
    username_attributes: Optional[list[shared_usernameattributetype_enum.UsernameAttributeTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsernameAttributes') }})
    username_configuration: Optional[shared_usernameconfigurationtype.UsernameConfigurationType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsernameConfiguration') }})
    verification_message_template: Optional[shared_verificationmessagetemplatetype.VerificationMessageTemplateType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerificationMessageTemplate') }})
    
