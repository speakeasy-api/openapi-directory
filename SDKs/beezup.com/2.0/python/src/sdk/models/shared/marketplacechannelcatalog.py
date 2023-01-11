import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_apisettingsstatus_enum as shared_beezup_common_apisettingsstatus_enum
from ..shared import marketplacechannelcataloglinks as shared_marketplacechannelcataloglinks
from ..shared import marketplacechannelcataloglovlinks as shared_marketplacechannelcataloglovlinks


@dataclass_json
@dataclasses.dataclass
class MarketplaceChannelCatalog:
    r"""MarketplaceChannelCatalog
    This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
    """
    
    api_settings_status: shared_beezup_common_apisettingsstatus_enum.BeezUpCommonAPISettingsStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSettingsStatus') }})
    beez_up_channel_catalog_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPChannelCatalogId') }})
    beez_up_channel_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPChannelId') }})
    beez_up_marketplace_name: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPMarketplaceName') }})
    beez_up_store_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPStoreId') }})
    beez_up_store_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPStoreName') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    links: shared_marketplacechannelcataloglinks.MarketplaceChannelCatalogLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    lov_links: shared_marketplacechannelcataloglovlinks.MarketplaceChannelCatalogLovLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lovLinks') }})
    marketplace_business_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceBusinessCode') }})
    marketplace_iso_country_code_alpha2: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceIsoCountryCodeAlpha2') }})
    marketplace_market_place_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceMarketPlaceId') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    marketplace_account_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceAccountId') }})
    marketplace_merchant_identifiers: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceMerchantIdentifiers') }})
    
