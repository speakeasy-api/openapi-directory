package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EpisodeAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_user_comments")
    public Boolean allowUserComments;
    public EpisodeAttributes withAllowUserComments(Boolean allowUserComments) {
        this.allowUserComments = allowUserComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cascaded_cover_image_id")
    public String cascadedCoverImageId;
    public EpisodeAttributes withCascadedCoverImageId(String cascadedCoverImageId) {
        this.cascadedCoverImageId = cascadedCoverImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_image_id")
    public String coverImageId;
    public EpisodeAttributes withCoverImageId(String coverImageId) {
        this.coverImageId = coverImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public EpisodeAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EpisodeAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_is_html")
    public Boolean descriptionIsHtml;
    public EpisodeAttributes withDescriptionIsHtml(Boolean descriptionIsHtml) {
        this.descriptionIsHtml = descriptionIsHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_plain")
    public String descriptionPlain;
    public EpisodeAttributes withDescriptionPlain(String descriptionPlain) {
        this.descriptionPlain = descriptionPlain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_name")
    public String fileName;
    public EpisodeAttributes withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itunes_type")
    public EpisodeAttributesItunesTypeEnum itunesType;
    public EpisodeAttributes withItunesType(EpisodeAttributesItunesTypeEnum itunesType) {
        this.itunesType = itunesType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listen_count")
    public Long listenCount;
    public EpisodeAttributes withListenCount(Long listenCount) {
        this.listenCount = listenCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("premium_status")
    public EpisodeAttributesPremiumStatusEnum premiumStatus;
    public EpisodeAttributes withPremiumStatus(EpisodeAttributesPremiumStatusEnum premiumStatus) {
        this.premiumStatus = premiumStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public Boolean published;
    public EpisodeAttributes withPublished(Boolean published) {
        this.published = published;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_immediately")
    public Boolean releaseImmediately;
    public EpisodeAttributes withReleaseImmediately(Boolean releaseImmediately) {
        this.releaseImmediately = releaseImmediately;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("released_at")
    public OffsetDateTime releasedAt;
    public EpisodeAttributes withReleasedAt(OffsetDateTime releasedAt) {
        this.releasedAt = releasedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rss_guid")
    public String rssGuid;
    public EpisodeAttributes withRssGuid(String rssGuid) {
        this.rssGuid = rssGuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season_id")
    public String seasonId;
    public EpisodeAttributes withSeasonId(String seasonId) {
        this.seasonId = seasonId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series_id")
    public String seriesId;
    public EpisodeAttributes withSeriesId(String seriesId) {
        this.seriesId = seriesId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_title")
    public String sortTitle;
    public EpisodeAttributes withSortTitle(String sortTitle) {
        this.sortTitle = sortTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public EpisodeAttributesStatusEnum status;
    public EpisodeAttributes withStatus(EpisodeAttributesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EpisodeAttributes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public EpisodeAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}