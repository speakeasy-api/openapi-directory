import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_optimiselink as shared_links_optimiselink
from ..shared import links_optimisealllink as shared_links_optimisealllink
from ..shared import links_optimisebycategorylink as shared_links_optimisebycategorylink
from ..shared import links_optimisebychannellink as shared_links_optimisebychannellink
from ..shared import links_optimisebyproductlink as shared_links_optimisebyproductlink
from ..shared import links_getstorereportbycategorylink as shared_links_getstorereportbycategorylink
from ..shared import links_getstorereportbychannellink as shared_links_getstorereportbychannellink
from ..shared import links_getstorereportbydaylink as shared_links_getstorereportbydaylink
from ..shared import links_getstorereportbyproductlink as shared_links_getstorereportbyproductlink
from ..shared import links_getreportfilterslink as shared_links_getreportfilterslink
from ..shared import links_getruleslink as shared_links_getruleslink
from ..shared import links_analyticsindexlink as shared_links_analyticsindexlink
from ..shared import links_getstoretrackedclickslink as shared_links_getstoretrackedclickslink
from ..shared import links_getstoretrackedexternalorderslink as shared_links_getstoretrackedexternalorderslink
from ..shared import links_getstoretrackedorderslink as shared_links_getstoretrackedorderslink
from ..shared import links_getstoretrackingstatuslink as shared_links_getstoretrackingstatuslink


@dataclass_json
@dataclasses.dataclass
class AnalyticsStoreIndexLinks:
    report_filters: shared_links_getreportfilterslink.LinksGetReportFiltersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportFilters') }})
    self: shared_links_analyticsindexlink.LinksAnalyticsIndexLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    tracked_clicks: shared_links_getstoretrackedclickslink.LinksGetStoreTrackedClicksLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackedClicks') }})
    tracked_orders: shared_links_getstoretrackedorderslink.LinksGetStoreTrackedOrdersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackedOrders') }})
    tracking_status: shared_links_getstoretrackingstatuslink.LinksGetStoreTrackingStatusLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingStatus') }})
    optimise: Optional[shared_links_optimiselink.LinksOptimiseLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimise') }})
    optimise_all: Optional[shared_links_optimisealllink.LinksOptimiseAllLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimiseAll') }})
    optimise_by_category: Optional[shared_links_optimisebycategorylink.LinksOptimiseByCategoryLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimiseByCategory') }})
    optimise_by_channel: Optional[shared_links_optimisebychannellink.LinksOptimiseByChannelLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimiseByChannel') }})
    optimise_by_product: Optional[shared_links_optimisebyproductlink.LinksOptimiseByProductLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimiseByProduct') }})
    report_by_category: Optional[shared_links_getstorereportbycategorylink.LinksGetStoreReportByCategoryLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportByCategory') }})
    report_by_channel: Optional[shared_links_getstorereportbychannellink.LinksGetStoreReportByChannelLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportByChannel') }})
    report_by_day: Optional[shared_links_getstorereportbydaylink.LinksGetStoreReportByDayLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportByDay') }})
    report_by_product: Optional[shared_links_getstorereportbyproductlink.LinksGetStoreReportByProductLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportByProduct') }})
    rules: Optional[shared_links_getruleslink.LinksGetRulesLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    tracked_external_orders: Optional[shared_links_getstoretrackedexternalorderslink.LinksGetStoreTrackedExternalOrdersLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackedExternalOrders') }})
    
