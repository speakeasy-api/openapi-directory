package shared

import (
	"time"
)

type SeasonAttributesStatusEnum string

const (
	SeasonAttributesStatusEnumActive   SeasonAttributesStatusEnum = "active"
	SeasonAttributesStatusEnumInactive SeasonAttributesStatusEnum = "inactive"
)

type SeasonAttributes struct {
	CascadedCoverImageID   *string                     `json:"cascaded_cover_image_id,omitempty"`
	CoverImageID           *string                     `json:"cover_image_id,omitempty"`
	CreatedAt              *time.Time                  `json:"created_at,omitempty"`
	Description            *string                     `json:"description,omitempty"`
	DescriptionIsHTML      *bool                       `json:"description_is_html,omitempty"`
	DescriptionPlain       *string                     `json:"description_plain,omitempty"`
	FirstReleasedEpisodeID *string                     `json:"first_released_episode_id,omitempty"`
	LastReleasedEpisodeID  *string                     `json:"last_released_episode_id,omitempty"`
	SeasonNumber           *int64                      `json:"season_number,omitempty"`
	SortTitle              *string                     `json:"sort_title,omitempty"`
	Status                 *SeasonAttributesStatusEnum `json:"status,omitempty"`
	Title                  *string                     `json:"title,omitempty"`
	UpdatedAt              *time.Time                  `json:"updated_at,omitempty"`
}

// SeasonRelationshipsCascadedCoverImage
// The cover art for this season. If there is no specific cover for the season,
// the cover image of the series' cover art will be returned.
// The `/images` endpoint provideds details to the image.
type SeasonRelationshipsCascadedCoverImage struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// SeasonRelationshipsCoverImage
// The cover image for the season
type SeasonRelationshipsCoverImage struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// SeasonRelationshipsFirstReleasedEpisode
// The first released episode within the season
type SeasonRelationshipsFirstReleasedEpisode struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// SeasonRelationshipsLastReleasedEpisode
// The most recently released episode within the season
type SeasonRelationshipsLastReleasedEpisode struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsTheSeriesTheSeasonBelongsTo struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationshipsAListOfTagsAssociatedWithTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeasonRelationships struct {
	CascadedCoverImage       *SeasonRelationshipsCascadedCoverImage                                                      `json:"cascaded_cover_image,omitempty"`
	ClassificationInclusions *SeasonRelationshipsAListOfClassificationsAssociatedWithTheSeason                           `json:"classification_inclusions,omitempty"`
	CoverImage               *SeasonRelationshipsCoverImage                                                              `json:"cover_image,omitempty"`
	Credits                  *SeasonRelationshipsAListOfCreditsGivenToPeopleInTheSeason                                  `json:"credits,omitempty"`
	Episodes                 *SeasonRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFileWithinTheSeason `json:"episodes,omitempty"`
	FirstReleasedEpisode     *SeasonRelationshipsFirstReleasedEpisode                                                    `json:"first_released_episode,omitempty"`
	Images                   *SeasonRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason                   `json:"images,omitempty"`
	LastReleasedEpisode      *SeasonRelationshipsLastReleasedEpisode                                                     `json:"last_released_episode,omitempty"`
	Series                   *SeasonRelationshipsTheSeriesTheSeasonBelongsTo                                             `json:"series,omitempty"`
	Taggings                 *SeasonRelationshipsAListOfAssociationsLinkingTagsToTheSeason                               `json:"taggings,omitempty"`
	Tags                     *SeasonRelationshipsAListOfTagsAssociatedWithTheSeason                                      `json:"tags,omitempty"`
}

type Season struct {
	Attributes    *SeasonAttributes    `json:"attributes,omitempty"`
	ID            *string              `json:"id,omitempty"`
	Relationships *SeasonRelationships `json:"relationships,omitempty"`
	Type          *string              `json:"type,omitempty"`
}
