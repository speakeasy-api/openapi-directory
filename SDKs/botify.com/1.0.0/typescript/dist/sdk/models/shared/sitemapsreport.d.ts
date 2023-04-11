import { SpeakeasyBase } from "../../../internal/utils";
import { SitemapsReportOnly } from "./sitemapsreportonly";
import { SitemapsReportSitemap } from "./sitemapsreportsitemap";
/**
 * Successful operation
 */
export declare class SitemapsReport extends SpeakeasyBase {
    count: number;
    errors: SitemapsReportSitemap[];
    sitemapIndexes: SitemapsReportSitemap[];
    sitemapOnly: SitemapsReportOnly;
    sitemaps: SitemapsReportSitemap[];
}
