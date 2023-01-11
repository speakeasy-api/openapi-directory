package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEntity
 * List Apps
**/
public class AppEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_type")
    public AppEntityAppTypeEnum appType;
    public AppEntity withAppType(AppEntityAppTypeEnum appType) {
        this.appType = appType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation_links")
    public String documentationLinks;
    public AppEntity withDocumentationLinks(String documentationLinks) {
        this.documentationLinks = documentationLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extended_description")
    public String extendedDescription;
    public AppEntity withExtendedDescription(String extendedDescription) {
        this.extendedDescription = extendedDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_homepage_url")
    public String externalHomepageUrl;
    public AppEntity withExternalHomepageUrl(String externalHomepageUrl) {
        this.externalHomepageUrl = externalHomepageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("featured")
    public Boolean featured;
    public AppEntity withFeatured(Boolean featured) {
        this.featured = featured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("folder_behavior_type")
    public AppEntityFolderBehaviorTypeEnum folderBehaviorType;
    public AppEntity withFolderBehaviorType(AppEntityFolderBehaviorTypeEnum folderBehaviorType) {
        this.folderBehaviorType = folderBehaviorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon_url")
    public String iconUrl;
    public AppEntity withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_thumbnail_url")
    public String logoThumbnailUrl;
    public AppEntity withLogoThumbnailUrl(String logoThumbnailUrl) {
        this.logoThumbnailUrl = logoThumbnailUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_url")
    public String logoUrl;
    public AppEntity withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketing_youtube_url")
    public String marketingYoutubeUrl;
    public AppEntity withMarketingYoutubeUrl(String marketingYoutubeUrl) {
        this.marketingYoutubeUrl = marketingYoutubeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AppEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_server_type")
    public AppEntityRemoteServerTypeEnum remoteServerType;
    public AppEntity withRemoteServerType(AppEntityRemoteServerTypeEnum remoteServerType) {
        this.remoteServerType = remoteServerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screenshot_list_urls")
    public String screenshotListUrls;
    public AppEntity withScreenshotListUrls(String screenshotListUrls) {
        this.screenshotListUrls = screenshotListUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_description")
    public String shortDescription;
    public AppEntity withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sso_strategy_type")
    public AppEntitySsoStrategyTypeEnum ssoStrategyType;
    public AppEntity withSsoStrategyType(AppEntitySsoStrategyTypeEnum ssoStrategyType) {
        this.ssoStrategyType = ssoStrategyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tutorial_youtube_url")
    public String tutorialYoutubeUrl;
    public AppEntity withTutorialYoutubeUrl(String tutorialYoutubeUrl) {
        this.tutorialYoutubeUrl = tutorialYoutubeUrl;
        return this;
    }
}