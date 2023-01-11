import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import channelcatalogcategoryconfigurationinfo as shared_channelcatalogcategoryconfigurationinfo
from ..shared import coststatus_enum as shared_coststatus_enum
from ..shared import channelcatalogcategorymappingslinks as shared_channelcatalogcategorymappingslinks
from ..shared import mappingstatus_enum as shared_mappingstatus_enum


@dataclass_json
@dataclasses.dataclass
class ChannelCatalogCategoryConfigurationList:
    channel_catalog_category_configurations: list[shared_channelcatalogcategoryconfigurationinfo.ChannelCatalogCategoryConfigurationInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCatalogCategoryConfigurations') }})
    cost_status: shared_coststatus_enum.CostStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('costStatus') }})
    links: shared_channelcatalogcategorymappingslinks.ChannelCatalogCategoryMappingsLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    mapping_status: shared_mappingstatus_enum.MappingStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mappingStatus') }})
    
