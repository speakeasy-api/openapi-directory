import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SitemapsReportSitemap } from "./sitemapsreportsitemap";
import { SitemapsReportOnly } from "./sitemapsreportonly";



export class SitemapsReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: SitemapsReportSitemap })
  errors: SitemapsReportSitemap[];

  @SpeakeasyMetadata({ data: "json, name=sitemap_indexes", elemType: SitemapsReportSitemap })
  sitemapIndexes: SitemapsReportSitemap[];

  @SpeakeasyMetadata({ data: "json, name=sitemap_only" })
  sitemapOnly: SitemapsReportOnly;

  @SpeakeasyMetadata({ data: "json, name=sitemaps", elemType: SitemapsReportSitemap })
  sitemaps: SitemapsReportSitemap[];
}
