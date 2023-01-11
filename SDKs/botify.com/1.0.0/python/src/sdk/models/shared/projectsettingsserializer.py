import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ProjectSettingsSerializer:
    allowed_domains: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_domains') }})
    blacklisted_domains: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklisted_domains') }})
    header_settings: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('header_settings') }})
    max_nb_pages: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_nb_pages') }})
    sitemaps: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sitemaps') }})
    start_urls: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_urls') }})
    compare_crawl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compare_crawl') }})
    crawl_gzip: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawl_gzip') }})
    extra_headers: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_headers') }})
    google_analytics_account_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_analytics_account_email') }})
    google_analytics_nb_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_analytics_nb_days') }})
    google_analytics_site_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_analytics_site_id') }})
    google_social_auth_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('google_social_auth_id') }})
    has_robots_txt: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_robots_txt') }})
    max_depth: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_depth') }})
    max_pages_per_sec: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_pages_per_sec') }})
    respect_nofollow: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respect_nofollow') }})
    user_agent: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_agent') }})
    
