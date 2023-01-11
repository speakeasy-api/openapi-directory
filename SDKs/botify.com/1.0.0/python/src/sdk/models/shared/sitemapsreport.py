import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import sitemapsreportsitemap as shared_sitemapsreportsitemap
from ..shared import sitemapsreportonly as shared_sitemapsreportonly


@dataclass_json
@dataclasses.dataclass
class SitemapsReport:
    count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    errors: list[shared_sitemapsreportsitemap.SitemapsReportSitemap] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    sitemap_indexes: list[shared_sitemapsreportsitemap.SitemapsReportSitemap] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitemap_indexes') }})
    sitemap_only: shared_sitemapsreportonly.SitemapsReportOnly = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitemap_only') }})
    sitemaps: list[shared_sitemapsreportsitemap.SitemapsReportSitemap] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitemaps') }})
    
