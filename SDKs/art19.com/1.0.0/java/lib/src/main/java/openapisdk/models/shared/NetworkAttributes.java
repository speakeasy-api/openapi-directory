package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class NetworkAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyright")
    public String copyright;
    public NetworkAttributes withCopyright(String copyright) {
        this.copyright = copyright;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public NetworkAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NetworkAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_is_html")
    public Boolean descriptionIsHtml;
    public NetworkAttributes withDescriptionIsHtml(Boolean descriptionIsHtml) {
        this.descriptionIsHtml = descriptionIsHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_plain")
    public String descriptionPlain;
    public NetworkAttributes withDescriptionPlain(String descriptionPlain) {
        this.descriptionPlain = descriptionPlain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook_url")
    public String facebookUrl;
    public NetworkAttributes withFacebookUrl(String facebookUrl) {
        this.facebookUrl = facebookUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instagram_url")
    public String instagramUrl;
    public NetworkAttributes withInstagramUrl(String instagramUrl) {
        this.instagramUrl = instagramUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedin_url")
    public String linkedinUrl;
    public NetworkAttributes withLinkedinUrl(String linkedinUrl) {
        this.linkedinUrl = linkedinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NetworkAttributes withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_email")
    public String publicEmail;
    public NetworkAttributes withPublicEmail(String publicEmail) {
        this.publicEmail = publicEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_page_enabled")
    public Boolean publicPageEnabled;
    public NetworkAttributes withPublicPageEnabled(Boolean publicPageEnabled) {
        this.publicPageEnabled = publicPageEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public NetworkAttributes withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tumblr_url")
    public String tumblrUrl;
    public NetworkAttributes withTumblrUrl(String tumblrUrl) {
        this.tumblrUrl = tumblrUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_url")
    public String twitterUrl;
    public NetworkAttributes withTwitterUrl(String twitterUrl) {
        this.twitterUrl = twitterUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public NetworkAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website_url")
    public String websiteUrl;
    public NetworkAttributes withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
}