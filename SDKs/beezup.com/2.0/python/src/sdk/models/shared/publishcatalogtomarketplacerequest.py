import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import feedtype_enum as shared_feedtype_enum
from ..shared import publicationstrategykind_enum as shared_publicationstrategykind_enum


@dataclass_json
@dataclasses.dataclass
class PublishCatalogToMarketplaceRequest:
    r"""PublishCatalogToMarketplaceRequest
    Publish the catalog to the marketplace
    """
    
    feed_type: shared_feedtype_enum.FeedTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedType') }})
    publication_strategy_kind: shared_publicationstrategykind_enum.PublicationStrategyKindEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicationStrategyKind') }})
    with_unpublish: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('withUnpublish') }})
    
