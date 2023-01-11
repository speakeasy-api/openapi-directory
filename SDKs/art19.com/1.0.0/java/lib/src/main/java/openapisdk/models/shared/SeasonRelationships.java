package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SeasonRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cascaded_cover_image")
    public SeasonRelationshipsCascadedCoverImage cascadedCoverImage;
    public SeasonRelationships withCascadedCoverImage(SeasonRelationshipsCascadedCoverImage cascadedCoverImage) {
        this.cascadedCoverImage = cascadedCoverImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification_inclusions")
    public SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason classificationInclusions;
    public SeasonRelationships withClassificationInclusions(SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason classificationInclusions) {
        this.classificationInclusions = classificationInclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_image")
    public SeasonRelationshipsCoverImage coverImage;
    public SeasonRelationships withCoverImage(SeasonRelationshipsCoverImage coverImage) {
        this.coverImage = coverImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credits")
    public SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason credits;
    public SeasonRelationships withCredits(SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episodes")
    public SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason episodes;
    public SeasonRelationships withEpisodes(SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_released_episode")
    public SeasonRelationshipsFirstReleasedEpisode firstReleasedEpisode;
    public SeasonRelationships withFirstReleasedEpisode(SeasonRelationshipsFirstReleasedEpisode firstReleasedEpisode) {
        this.firstReleasedEpisode = firstReleasedEpisode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason images;
    public SeasonRelationships withImages(SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_released_episode")
    public SeasonRelationshipsLastReleasedEpisode lastReleasedEpisode;
    public SeasonRelationships withLastReleasedEpisode(SeasonRelationshipsLastReleasedEpisode lastReleasedEpisode) {
        this.lastReleasedEpisode = lastReleasedEpisode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public SeasonRelationshipsTheSeriesTheSeasonBelongsTo series;
    public SeasonRelationships withSeries(SeasonRelationshipsTheSeriesTheSeasonBelongsTo series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taggings")
    public SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason taggings;
    public SeasonRelationships withTaggings(SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason taggings) {
        this.taggings = taggings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public SeasonRelationshipsAListOfTagsAssociatedWithTheSeason tags;
    public SeasonRelationships withTags(SeasonRelationshipsAListOfTagsAssociatedWithTheSeason tags) {
        this.tags = tags;
        return this;
    }
}