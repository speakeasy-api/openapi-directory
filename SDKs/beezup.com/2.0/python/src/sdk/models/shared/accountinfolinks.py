import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_activateuseraccountlink as shared_links_activateuseraccountlink
from ..shared import links_changeemaillink as shared_links_changeemaillink
from ..shared import links_changepasswordlink as shared_links_changepasswordlink
from ..shared import links_getcreditcardinfolink as shared_links_getcreditcardinfolink
from ..shared import links_getprofilepictureinfolink as shared_links_getprofilepictureinfolink
from ..shared import links_savecompanyinfolink as shared_links_savecompanyinfolink
from ..shared import links_savecreditcardinfolink as shared_links_savecreditcardinfolink
from ..shared import links_savepersonalinfolink as shared_links_savepersonalinfolink
from ..shared import links_saveprofilepictureinfolink as shared_links_saveprofilepictureinfolink
from ..shared import links_getuseraccountinfolink as shared_links_getuseraccountinfolink


@dataclass_json
@dataclasses.dataclass
class AccountInfoLinks:
    r"""AccountInfoLinks
    The different actions you can make on this account
    """
    
    change_email: shared_links_changeemaillink.LinksChangeEmailLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeEmail') }})
    change_password: shared_links_changepasswordlink.LinksChangePasswordLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('changePassword') }})
    get_credit_card_info: shared_links_getcreditcardinfolink.LinksGetCreditCardInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('getCreditCardInfo') }})
    get_profile_picture_info: shared_links_getprofilepictureinfolink.LinksGetProfilePictureInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('getProfilePictureInfo') }})
    save_company_info: shared_links_savecompanyinfolink.LinksSaveCompanyInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveCompanyInfo') }})
    save_credit_card_info: shared_links_savecreditcardinfolink.LinksSaveCreditCardInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveCreditCardInfo') }})
    save_personal_info: shared_links_savepersonalinfolink.LinksSavePersonalInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('savePersonalInfo') }})
    save_profile_picture_info: shared_links_saveprofilepictureinfolink.LinksSaveProfilePictureInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('saveProfilePictureInfo') }})
    self: shared_links_getuseraccountinfolink.LinksGetUserAccountInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    activate_user_account: Optional[shared_links_activateuseraccountlink.LinksActivateUserAccountLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activateUserAccount') }})
    
