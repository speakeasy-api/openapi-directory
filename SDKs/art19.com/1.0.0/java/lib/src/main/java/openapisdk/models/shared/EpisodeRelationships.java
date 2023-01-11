package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EpisodeRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cascaded_cover_image")
    public EpisodeRelationshipsCascadedCoverImage cascadedCoverImage;
    public EpisodeRelationships withCascadedCoverImage(EpisodeRelationshipsCascadedCoverImage cascadedCoverImage) {
        this.cascadedCoverImage = cascadedCoverImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification_inclusions")
    public EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode classificationInclusions;
    public EpisodeRelationships withClassificationInclusions(EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode classificationInclusions) {
        this.classificationInclusions = classificationInclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover_image")
    public EpisodeRelationshipsCoverImage coverImage;
    public EpisodeRelationships withCoverImage(EpisodeRelationshipsCoverImage coverImage) {
        this.coverImage = coverImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credits")
    public EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode credits;
    public EpisodeRelationships withCredits(EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_marker_points")
    public EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints defaultMarkerPoints;
    public EpisodeRelationships withDefaultMarkerPoints(EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints defaultMarkerPoints) {
        this.defaultMarkerPoints = defaultMarkerPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode_versions")
    public EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode episodeVersions;
    public EpisodeRelationships withEpisodeVersions(EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode episodeVersions) {
        this.episodeVersions = episodeVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("images")
    public EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason images;
    public EpisodeRelationships withImages(EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason images) {
        this.images = images;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("season")
    public EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo season;
    public EpisodeRelationships withSeason(EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo season) {
        this.season = season;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment_lists")
    public EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode segmentLists;
    public EpisodeRelationships withSegmentLists(EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode segmentLists) {
        this.segmentLists = segmentLists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("series")
    public EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo series;
    public EpisodeRelationships withSeries(EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo series) {
        this.series = series;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taggings")
    public EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes taggings;
    public EpisodeRelationships withTaggings(EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes taggings) {
        this.taggings = taggings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes tags;
    public EpisodeRelationships withTags(EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes tags) {
        this.tags = tags;
        return this;
    }
}