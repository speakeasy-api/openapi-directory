package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SeriesAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amazon_subscription_url")
    public String amazonSubscriptionUrl;
    public SeriesAttributes withAmazonSubscriptionUrl(String amazonSubscriptionUrl) {
        this.amazonSubscriptionUrl = amazonSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("castbox_subscription_url")
    public String castboxSubscriptionUrl;
    public SeriesAttributes withCastboxSubscriptionUrl(String castboxSubscriptionUrl) {
        this.castboxSubscriptionUrl = castboxSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_image_id")
    public String coverImageId;
    public SeriesAttributes withCoverImageId(String coverImageId) {
        this.coverImageId = coverImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SeriesAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SeriesAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_is_html")
    public Boolean descriptionIsHtml;
    public SeriesAttributes withDescriptionIsHtml(Boolean descriptionIsHtml) {
        this.descriptionIsHtml = descriptionIsHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_plain")
    public String descriptionPlain;
    public SeriesAttributes withDescriptionPlain(String descriptionPlain) {
        this.descriptionPlain = descriptionPlain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook_url")
    public String facebookUrl;
    public SeriesAttributes withFacebookUrl(String facebookUrl) {
        this.facebookUrl = facebookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_subscription_url")
    public String googleSubscriptionUrl;
    public SeriesAttributes withGoogleSubscriptionUrl(String googleSubscriptionUrl) {
        this.googleSubscriptionUrl = googleSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iheart_subscription_url")
    public String iheartSubscriptionUrl;
    public SeriesAttributes withIheartSubscriptionUrl(String iheartSubscriptionUrl) {
        this.iheartSubscriptionUrl = iheartSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instagram_url")
    public String instagramUrl;
    public SeriesAttributes withInstagramUrl(String instagramUrl) {
        this.instagramUrl = instagramUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_subscription_badge_enabled")
    public Boolean itunesSubscriptionBadgeEnabled;
    public SeriesAttributes withItunesSubscriptionBadgeEnabled(Boolean itunesSubscriptionBadgeEnabled) {
        this.itunesSubscriptionBadgeEnabled = itunesSubscriptionBadgeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_subscription_url")
    public String itunesSubscriptionUrl;
    public SeriesAttributes withItunesSubscriptionUrl(String itunesSubscriptionUrl) {
        this.itunesSubscriptionUrl = itunesSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedin_url")
    public String linkedinUrl;
    public SeriesAttributes withLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pocket_casts_subscription_url")
    public String pocketCastsSubscriptionUrl;
    public SeriesAttributes withPocketCastsSubscriptionUrl(String pocketCastsSubscriptionUrl) {
        this.pocketCastsSubscriptionUrl = pocketCastsSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podcast_subscription_url")
    public String podcastSubscriptionUrl;
    public SeriesAttributes withPodcastSubscriptionUrl(String podcastSubscriptionUrl) {
        this.podcastSubscriptionUrl = podcastSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_page_enabled")
    public Boolean publicPageEnabled;
    public SeriesAttributes withPublicPageEnabled(Boolean publicPageEnabled) {
        this.publicPageEnabled = publicPageEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_title")
    public String publicTitle;
    public SeriesAttributes withPublicTitle(String publicTitle) {
        this.publicTitle = publicTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radio_public_subscription_url")
    public String radioPublicSubscriptionUrl;
    public SeriesAttributes withRadioPublicSubscriptionUrl(String radioPublicSubscriptionUrl) {
        this.radioPublicSubscriptionUrl = radioPublicSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss_author")
    public String rssAuthor;
    public SeriesAttributes withRssAuthor(String rssAuthor) {
        this.rssAuthor = rssAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss_copyright")
    public String rssCopyright;
    public SeriesAttributes withRssCopyright(String rssCopyright) {
        this.rssCopyright = rssCopyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss_email")
    public String rssEmail;
    public SeriesAttributes withRssEmail(String rssEmail) {
        this.rssEmail = rssEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss_owner")
    public String rssOwner;
    public SeriesAttributes withRssOwner(String rssOwner) {
        this.rssOwner = rssOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public SeriesAttributes withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_title")
    public String sortTitle;
    public SeriesAttributes withSortTitle(String sortTitle) {
        this.sortTitle = sortTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spotify_subscription_badge_enabled")
    public Boolean spotifySubscriptionBadgeEnabled;
    public SeriesAttributes withSpotifySubscriptionBadgeEnabled(Boolean spotifySubscriptionBadgeEnabled) {
        this.spotifySubscriptionBadgeEnabled = spotifySubscriptionBadgeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spotify_subscription_url")
    public String spotifySubscriptionUrl;
    public SeriesAttributes withSpotifySubscriptionUrl(String spotifySubscriptionUrl) {
        this.spotifySubscriptionUrl = spotifySubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SeriesAttributesStatusEnum status;
    public SeriesAttributes withStatus(SeriesAttributesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stitcher_subscription_badge_enabled")
    public Boolean stitcherSubscriptionBadgeEnabled;
    public SeriesAttributes withStitcherSubscriptionBadgeEnabled(Boolean stitcherSubscriptionBadgeEnabled) {
        this.stitcherSubscriptionBadgeEnabled = stitcherSubscriptionBadgeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stitcher_subscription_url")
    public String stitcherSubscriptionUrl;
    public SeriesAttributes withStitcherSubscriptionUrl(String stitcherSubscriptionUrl) {
        this.stitcherSubscriptionUrl = stitcherSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SeriesAttributes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tumblr_url")
    public String tumblrUrl;
    public SeriesAttributes withTumblrUrl(String tumblrUrl) {
        this.tumblrUrl = tumblrUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tune_in_subscription_url")
    public String tuneInSubscriptionUrl;
    public SeriesAttributes withTuneInSubscriptionUrl(String tuneInSubscriptionUrl) {
        this.tuneInSubscriptionUrl = tuneInSubscriptionUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_url")
    public String twitterUrl;
    public SeriesAttributes withTwitterUrl(String twitterUrl) {
        this.twitterUrl = twitterUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SeriesAttributesTypeEnum type;
    public SeriesAttributes withType(SeriesAttributesTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public SeriesAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website_url")
    public String websiteUrl;
    public SeriesAttributes withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}