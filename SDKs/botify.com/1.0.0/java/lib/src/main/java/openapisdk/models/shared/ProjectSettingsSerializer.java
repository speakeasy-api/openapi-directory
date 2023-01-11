package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectSettingsSerializer {
    @JsonProperty("allowed_domains")
    public String[] allowedDomains;
    public ProjectSettingsSerializer withAllowedDomains(String[] allowedDomains) {
        this.allowedDomains = allowedDomains;
        return this;
    }
    @JsonProperty("blacklisted_domains")
    public String[] blacklistedDomains;
    public ProjectSettingsSerializer withBlacklistedDomains(String[] blacklistedDomains) {
        this.blacklistedDomains = blacklistedDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compare_crawl")
    public Boolean compareCrawl;
    public ProjectSettingsSerializer withCompareCrawl(Boolean compareCrawl) {
        this.compareCrawl = compareCrawl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crawl_gzip")
    public Boolean crawlGzip;
    public ProjectSettingsSerializer withCrawlGzip(Boolean crawlGzip) {
        this.crawlGzip = crawlGzip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extra_headers")
    public String extraHeaders;
    public ProjectSettingsSerializer withExtraHeaders(String extraHeaders) {
        this.extraHeaders = extraHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_analytics_account_email")
    public String googleAnalyticsAccountEmail;
    public ProjectSettingsSerializer withGoogleAnalyticsAccountEmail(String googleAnalyticsAccountEmail) {
        this.googleAnalyticsAccountEmail = googleAnalyticsAccountEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_analytics_nb_days")
    public Long googleAnalyticsNbDays;
    public ProjectSettingsSerializer withGoogleAnalyticsNbDays(Long googleAnalyticsNbDays) {
        this.googleAnalyticsNbDays = googleAnalyticsNbDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_analytics_site_id")
    public Long googleAnalyticsSiteId;
    public ProjectSettingsSerializer withGoogleAnalyticsSiteId(Long googleAnalyticsSiteId) {
        this.googleAnalyticsSiteId = googleAnalyticsSiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_social_auth_id")
    public Long googleSocialAuthId;
    public ProjectSettingsSerializer withGoogleSocialAuthId(Long googleSocialAuthId) {
        this.googleSocialAuthId = googleSocialAuthId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_robots_txt")
    public String hasRobotsTxt;
    public ProjectSettingsSerializer withHasRobotsTxt(String hasRobotsTxt) {
        this.hasRobotsTxt = hasRobotsTxt;
        return this;
    }
    @JsonProperty("header_settings")
    public String[] headerSettings;
    public ProjectSettingsSerializer withHeaderSettings(String[] headerSettings) {
        this.headerSettings = headerSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_depth")
    public Long maxDepth;
    public ProjectSettingsSerializer withMaxDepth(Long maxDepth) {
        this.maxDepth = maxDepth;
        return this;
    }
    @JsonProperty("max_nb_pages")
    public Long maxNbPages;
    public ProjectSettingsSerializer withMaxNbPages(Long maxNbPages) {
        this.maxNbPages = maxNbPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_pages_per_sec")
    public Long maxPagesPerSec;
    public ProjectSettingsSerializer withMaxPagesPerSec(Long maxPagesPerSec) {
        this.maxPagesPerSec = maxPagesPerSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respect_nofollow")
    public Boolean respectNofollow;
    public ProjectSettingsSerializer withRespectNofollow(Boolean respectNofollow) {
        this.respectNofollow = respectNofollow;
        return this;
    }
    @JsonProperty("sitemaps")
    public String[] sitemaps;
    public ProjectSettingsSerializer withSitemaps(String[] sitemaps) {
        this.sitemaps = sitemaps;
        return this;
    }
    @JsonProperty("start_urls")
    public String[] startUrls;
    public ProjectSettingsSerializer withStartUrls(String[] startUrls) {
        this.startUrls = startUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_agent")
    public String userAgent;
    public ProjectSettingsSerializer withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}