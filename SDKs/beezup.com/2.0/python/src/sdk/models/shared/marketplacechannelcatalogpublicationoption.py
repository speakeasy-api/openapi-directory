import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feedtype_enum as shared_feedtype_enum
from ..shared import publicationstrategykind_enum as shared_publicationstrategykind_enum
from ..shared import links_publishcatalogtomarketplacelink as shared_links_publishcatalogtomarketplacelink


@dataclass_json
@dataclasses.dataclass
class MarketplaceChannelCatalogPublicationOption:
    feed_type: shared_feedtype_enum.FeedTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    kind: shared_publicationstrategykind_enum.PublicationStrategyKindEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    link: shared_links_publishcatalogtomarketplacelink.LinksPublishCatalogToMarketplaceLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    strategy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    with_unpublish: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('withUnpublish') }})
    
