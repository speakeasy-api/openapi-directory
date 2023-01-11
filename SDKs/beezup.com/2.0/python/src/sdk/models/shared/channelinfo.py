import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChannelInfoDetails:
    business_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessModel') }})
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    channel_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelType') }})
    costs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costs') }})
    home_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeUrl') }})
    subscription_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionLink') }})
    tracking_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingType') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelInfoKeyNumbers:
    categories: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    products: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    stores: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stores') }})
    views_per_month: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewsPerMonth') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelInfoSalesContact:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelInfoTechnicalContact:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

@dataclass_json
@dataclasses.dataclass
class ChannelInfo:
    channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    channel_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelName') }})
    beez_up_offer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOffer') }})
    channel_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelDescription') }})
    channel_logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelLogoUrl') }})
    details: Optional[ChannelInfoDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    key_numbers: Optional[ChannelInfoKeyNumbers] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyNumbers') }})
    sales_contact: Optional[ChannelInfoSalesContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesContact') }})
    technical_contact: Optional[ChannelInfoTechnicalContact] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technicalContact') }})
    
