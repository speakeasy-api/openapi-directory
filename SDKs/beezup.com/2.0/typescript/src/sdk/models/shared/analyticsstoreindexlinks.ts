import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksOptimiseLink } from "./linksoptimiselink";
import { LinksOptimiseAllLink } from "./linksoptimisealllink";
import { LinksOptimiseByCategoryLink } from "./linksoptimisebycategorylink";
import { LinksOptimiseByChannelLink } from "./linksoptimisebychannellink";
import { LinksOptimiseByProductLink } from "./linksoptimisebyproductlink";
import { LinksGetStoreReportByCategoryLink } from "./linksgetstorereportbycategorylink";
import { LinksGetStoreReportByChannelLink } from "./linksgetstorereportbychannellink";
import { LinksGetStoreReportByDayLink } from "./linksgetstorereportbydaylink";
import { LinksGetStoreReportByProductLink } from "./linksgetstorereportbyproductlink";
import { LinksGetReportFiltersLink } from "./linksgetreportfilterslink";
import { LinksGetRulesLink } from "./linksgetruleslink";
import { LinksAnalyticsIndexLink } from "./linksanalyticsindexlink";
import { LinksGetStoreTrackedClicksLink } from "./linksgetstoretrackedclickslink";
import { LinksGetStoreTrackedExternalOrdersLink } from "./linksgetstoretrackedexternalorderslink";
import { LinksGetStoreTrackedOrdersLink } from "./linksgetstoretrackedorderslink";
import { LinksGetStoreTrackingStatusLink } from "./linksgetstoretrackingstatuslink";



export class AnalyticsStoreIndexLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=optimise" })
  optimise?: LinksOptimiseLink;

  @SpeakeasyMetadata({ data: "json, name=optimiseAll" })
  optimiseAll?: LinksOptimiseAllLink;

  @SpeakeasyMetadata({ data: "json, name=optimiseByCategory" })
  optimiseByCategory?: LinksOptimiseByCategoryLink;

  @SpeakeasyMetadata({ data: "json, name=optimiseByChannel" })
  optimiseByChannel?: LinksOptimiseByChannelLink;

  @SpeakeasyMetadata({ data: "json, name=optimiseByProduct" })
  optimiseByProduct?: LinksOptimiseByProductLink;

  @SpeakeasyMetadata({ data: "json, name=reportByCategory" })
  reportByCategory?: LinksGetStoreReportByCategoryLink;

  @SpeakeasyMetadata({ data: "json, name=reportByChannel" })
  reportByChannel?: LinksGetStoreReportByChannelLink;

  @SpeakeasyMetadata({ data: "json, name=reportByDay" })
  reportByDay?: LinksGetStoreReportByDayLink;

  @SpeakeasyMetadata({ data: "json, name=reportByProduct" })
  reportByProduct?: LinksGetStoreReportByProductLink;

  @SpeakeasyMetadata({ data: "json, name=reportFilters" })
  reportFilters: LinksGetReportFiltersLink;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: LinksGetRulesLink;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: LinksAnalyticsIndexLink;

  @SpeakeasyMetadata({ data: "json, name=trackedClicks" })
  trackedClicks: LinksGetStoreTrackedClicksLink;

  @SpeakeasyMetadata({ data: "json, name=trackedExternalOrders" })
  trackedExternalOrders?: LinksGetStoreTrackedExternalOrdersLink;

  @SpeakeasyMetadata({ data: "json, name=trackedOrders" })
  trackedOrders: LinksGetStoreTrackedOrdersLink;

  @SpeakeasyMetadata({ data: "json, name=trackingStatus" })
  trackingStatus: LinksGetStoreTrackingStatusLink;
}
