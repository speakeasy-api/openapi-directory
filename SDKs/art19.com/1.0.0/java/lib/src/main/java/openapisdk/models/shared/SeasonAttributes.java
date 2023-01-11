package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SeasonAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cascaded_cover_image_id")
    public String cascadedCoverImageId;
    public SeasonAttributes withCascadedCoverImageId(String cascadedCoverImageId) {
        this.cascadedCoverImageId = cascadedCoverImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_image_id")
    public String coverImageId;
    public SeasonAttributes withCoverImageId(String coverImageId) {
        this.coverImageId = coverImageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SeasonAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SeasonAttributes withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_is_html")
    public Boolean descriptionIsHtml;
    public SeasonAttributes withDescriptionIsHtml(Boolean descriptionIsHtml) {
        this.descriptionIsHtml = descriptionIsHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description_plain")
    public String descriptionPlain;
    public SeasonAttributes withDescriptionPlain(String descriptionPlain) {
        this.descriptionPlain = descriptionPlain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_released_episode_id")
    public String firstReleasedEpisodeId;
    public SeasonAttributes withFirstReleasedEpisodeId(String firstReleasedEpisodeId) {
        this.firstReleasedEpisodeId = firstReleasedEpisodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_released_episode_id")
    public String lastReleasedEpisodeId;
    public SeasonAttributes withLastReleasedEpisodeId(String lastReleasedEpisodeId) {
        this.lastReleasedEpisodeId = lastReleasedEpisodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season_number")
    public Long seasonNumber;
    public SeasonAttributes withSeasonNumber(Long seasonNumber) {
        this.seasonNumber = seasonNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sort_title")
    public String sortTitle;
    public SeasonAttributes withSortTitle(String sortTitle) {
        this.sortTitle = sortTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SeasonAttributesStatusEnum status;
    public SeasonAttributes withStatus(SeasonAttributesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SeasonAttributes withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public SeasonAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}