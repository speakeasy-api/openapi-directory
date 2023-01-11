import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountresponse as shared_accountresponse


@dataclasses.dataclass
class UpdateAccountHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccountUpdateAccountRequestBodyAllowedIPRanges:
    ip_end: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipEnd') }})
    ip_start: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipStart') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues:
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    custom_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customEmail') }})
    theme: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccountUpdateAccountRequestBodyAccountQuotaValues:
    notice_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noticeEnabled') }})
    notice_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noticeThreshold') }})
    transactions_notice_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionsNoticeEnabled') }})
    transactions_notice_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionsNoticeThreshold') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAccountUpdateAccountRequestBody:
    account_onboarding: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountOnboarding') }})
    allowed_ip_ranges: Optional[list[UpdateAccountUpdateAccountRequestBodyAllowedIPRanges]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedIpRanges') }})
    branding_settings: Optional[UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandingSettings') }})
    complex_passwords: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complexPasswords') }})
    custom_signature: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSignature') }})
    email_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailContent') }})
    email_subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailSubject') }})
    external_domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDomain') }})
    quota: Optional[UpdateAccountUpdateAccountRequestBodyAccountQuotaValues] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    secure_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secureOnly') }})
    show_referral_links: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showReferralLinks') }})
    

@dataclasses.dataclass
class UpdateAccountRequest:
    headers: UpdateAccountHeaders = dataclasses.field()
    request: Optional[UpdateAccountUpdateAccountRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account_response: Optional[shared_accountresponse.AccountResponse] = dataclasses.field(default=None)
    
