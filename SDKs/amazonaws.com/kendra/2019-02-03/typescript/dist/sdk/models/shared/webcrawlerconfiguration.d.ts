import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationConfiguration } from "./authenticationconfiguration";
import { ProxyConfiguration } from "./proxyconfiguration";
import { Urls } from "./urls";
/**
 * Provides the configuration information required for Amazon Kendra Web Crawler.
 */
export declare class WebCrawlerConfiguration extends SpeakeasyBase {
    authenticationConfiguration?: AuthenticationConfiguration;
    crawlDepth?: number;
    maxContentSizePerPageInMegaBytes?: number;
    maxLinksPerPage?: number;
    maxUrlsPerMinuteCrawlRate?: number;
    proxyConfiguration?: ProxyConfiguration;
    urlExclusionPatterns?: string[];
    urlInclusionPatterns?: string[];
    urls: Urls;
}
