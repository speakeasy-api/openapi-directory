import { SpeakeasyBase } from "../../../internal/utils";
import { SitemapsReportSitemap } from "./sitemapsreportsitemap";
import { SitemapsReportOnly } from "./sitemapsreportonly";
export declare class SitemapsReport extends SpeakeasyBase {
    count: number;
    errors: SitemapsReportSitemap[];
    sitemapIndexes: SitemapsReportSitemap[];
    sitemapOnly: SitemapsReportOnly;
    sitemaps: SitemapsReportSitemap[];
}
