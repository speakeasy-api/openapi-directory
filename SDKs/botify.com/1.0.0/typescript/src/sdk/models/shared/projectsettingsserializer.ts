import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectSettingsSerializer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_domains" })
  allowedDomains: string[];

  @SpeakeasyMetadata({ data: "json, name=blacklisted_domains" })
  blacklistedDomains: string[];

  @SpeakeasyMetadata({ data: "json, name=compare_crawl" })
  compareCrawl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=crawl_gzip" })
  crawlGzip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extra_headers" })
  extraHeaders?: string;

  @SpeakeasyMetadata({ data: "json, name=google_analytics_account_email" })
  googleAnalyticsAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=google_analytics_nb_days" })
  googleAnalyticsNbDays?: number;

  @SpeakeasyMetadata({ data: "json, name=google_analytics_site_id" })
  googleAnalyticsSiteId?: number;

  @SpeakeasyMetadata({ data: "json, name=google_social_auth_id" })
  googleSocialAuthId?: number;

  @SpeakeasyMetadata({ data: "json, name=has_robots_txt" })
  hasRobotsTxt?: string;

  @SpeakeasyMetadata({ data: "json, name=header_settings" })
  headerSettings: string[];

  @SpeakeasyMetadata({ data: "json, name=max_depth" })
  maxDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=max_nb_pages" })
  maxNbPages: number;

  @SpeakeasyMetadata({ data: "json, name=max_pages_per_sec" })
  maxPagesPerSec?: number;

  @SpeakeasyMetadata({ data: "json, name=respect_nofollow" })
  respectNofollow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sitemaps" })
  sitemaps: string[];

  @SpeakeasyMetadata({ data: "json, name=start_urls" })
  startUrls: string[];

  @SpeakeasyMetadata({ data: "json, name=user_agent" })
  userAgent?: string;
}
