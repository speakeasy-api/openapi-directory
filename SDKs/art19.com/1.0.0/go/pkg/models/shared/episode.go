package shared

import (
	"time"
)

type EpisodeAttributesItunesTypeEnum string

const (
	EpisodeAttributesItunesTypeEnumFull    EpisodeAttributesItunesTypeEnum = "full"
	EpisodeAttributesItunesTypeEnumBonus   EpisodeAttributesItunesTypeEnum = "bonus"
	EpisodeAttributesItunesTypeEnumTrailer EpisodeAttributesItunesTypeEnum = "trailer"
)

type EpisodeAttributesPremiumStatusEnum string

const (
	EpisodeAttributesPremiumStatusEnumActive        EpisodeAttributesPremiumStatusEnum = "active"
	EpisodeAttributesPremiumStatusEnumInactive      EpisodeAttributesPremiumStatusEnum = "inactive"
	EpisodeAttributesPremiumStatusEnumForceActive   EpisodeAttributesPremiumStatusEnum = "force-active"
	EpisodeAttributesPremiumStatusEnumForceInactive EpisodeAttributesPremiumStatusEnum = "force-inactive"
)

type EpisodeAttributesStatusEnum string

const (
	EpisodeAttributesStatusEnumActive   EpisodeAttributesStatusEnum = "active"
	EpisodeAttributesStatusEnumInactive EpisodeAttributesStatusEnum = "inactive"
)

type EpisodeAttributes struct {
	AllowUserComments    *bool                               `json:"allow_user_comments,omitempty"`
	CascadedCoverImageID *string                             `json:"cascaded_cover_image_id,omitempty"`
	CoverImageID         *string                             `json:"cover_image_id,omitempty"`
	CreatedAt            *time.Time                          `json:"created_at,omitempty"`
	Description          *string                             `json:"description,omitempty"`
	DescriptionIsHTML    *bool                               `json:"description_is_html,omitempty"`
	DescriptionPlain     *string                             `json:"description_plain,omitempty"`
	FileName             *string                             `json:"file_name,omitempty"`
	ItunesType           *EpisodeAttributesItunesTypeEnum    `json:"itunes_type,omitempty"`
	ListenCount          *int64                              `json:"listen_count,omitempty"`
	PremiumStatus        *EpisodeAttributesPremiumStatusEnum `json:"premium_status,omitempty"`
	Published            *bool                               `json:"published,omitempty"`
	ReleaseImmediately   *bool                               `json:"release_immediately,omitempty"`
	ReleasedAt           *time.Time                          `json:"released_at,omitempty"`
	RssGUID              *string                             `json:"rss_guid,omitempty"`
	SeasonID             *string                             `json:"season_id,omitempty"`
	SeriesID             *string                             `json:"series_id,omitempty"`
	SortTitle            *string                             `json:"sort_title,omitempty"`
	Status               *EpisodeAttributesStatusEnum        `json:"status,omitempty"`
	Title                *string                             `json:"title,omitempty"`
	UpdatedAt            *time.Time                          `json:"updated_at,omitempty"`
}

// EpisodeRelationshipsCascadedCoverImage
// The cover art for this episode. This is the preferred image to use.
// If there is no specific cover image for the episode, the cover of the season or the
// series will be returned, whichever has one defined.
// The `/images` endpoint provides details to the image.
type EpisodeRelationshipsCascadedCoverImage struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// EpisodeRelationshipsCoverImage
// The cover art for this episode, if an episode-specific image has been provided.
// The `/images` endpoint provideds details to the image.
type EpisodeRelationshipsCoverImage struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints
// Only visible if the credential has write privileges on the series
type EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode
// Only visible if the credential has write privileges on the series
type EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

// EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode
// Only visible if the credential has write privileges on the series
type EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type EpisodeRelationships struct {
	CascadedCoverImage       *EpisodeRelationshipsCascadedCoverImage                                    `json:"cascaded_cover_image,omitempty"`
	ClassificationInclusions *EpisodeRelationshipsAListOfClassificationsAssociatedWithTheEpisode        `json:"classification_inclusions,omitempty"`
	CoverImage               *EpisodeRelationshipsCoverImage                                            `json:"cover_image,omitempty"`
	Credits                  *EpisodeRelationshipsAListOfCreditsGivenToPeopleInTheEpisode               `json:"credits,omitempty"`
	DefaultMarkerPoints      *EpisodeRelationshipsAListOfDefaultWarpFeedMarkerPoints                    `json:"default_marker_points,omitempty"`
	EpisodeVersions          *EpisodeRelationshipsAListOfEpisodeVersionsForThisEpisode                  `json:"episode_versions,omitempty"`
	Images                   *EpisodeRelationshipsBothTheCoverImageAndTheCascadedCoverImageForTheSeason `json:"images,omitempty"`
	Season                   *EpisodeRelationshipsTheSeasonTheEpisodeBelongsTo                          `json:"season,omitempty"`
	SegmentLists             *EpisodeRelationshipsAListOfSegmentListsDirectlyAttachedToTheEpisode       `json:"segment_lists,omitempty"`
	Series                   *EpisodeRelationshipsTheSeriesAnEpisodeBelongsTo                           `json:"series,omitempty"`
	Taggings                 *EpisodeRelationshipsAListOfAssociationsLinkingTagsToTheEpisodes           `json:"taggings,omitempty"`
	Tags                     *EpisodeRelationshipsAListOfTagsAssociatedWithTheEpisodes                  `json:"tags,omitempty"`
}

type Episode struct {
	Attributes    *EpisodeAttributes    `json:"attributes,omitempty"`
	ID            *string               `json:"id,omitempty"`
	Relationships *EpisodeRelationships `json:"relationships,omitempty"`
	Type          *string               `json:"type,omitempty"`
}
