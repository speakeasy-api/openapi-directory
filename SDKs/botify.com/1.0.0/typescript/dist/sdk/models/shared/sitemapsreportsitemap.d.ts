import { SpeakeasyBase } from "../../../internal/utils";
import { SitemapsReportSitemapError } from "./sitemapsreportsitemaperror";
export declare class SitemapsReportSitemap extends SpeakeasyBase {
    error?: SitemapsReportSitemapError;
    fileType?: string;
    invalidUrls?: number;
    sitemapIndexes?: string[];
    url: string;
    validUrls?: number;
}
