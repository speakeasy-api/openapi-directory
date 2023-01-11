import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectSettingsSerializer extends SpeakeasyBase {
    allowedDomains: string[];
    blacklistedDomains: string[];
    compareCrawl?: boolean;
    crawlGzip?: boolean;
    extraHeaders?: string;
    googleAnalyticsAccountEmail?: string;
    googleAnalyticsNbDays?: number;
    googleAnalyticsSiteId?: number;
    googleSocialAuthId?: number;
    hasRobotsTxt?: string;
    headerSettings: string[];
    maxDepth?: number;
    maxNbPages: number;
    maxPagesPerSec?: number;
    respectNofollow?: boolean;
    sitemaps: string[];
    startUrls: string[];
    userAgent?: string;
}
