package shared

import (
	"time"
)

type SeriesAttributesStatusEnum string

const (
	SeriesAttributesStatusEnumActive   SeriesAttributesStatusEnum = "active"
	SeriesAttributesStatusEnumInactive SeriesAttributesStatusEnum = "inactive"
)

type SeriesAttributesTypeEnum string

const (
	SeriesAttributesTypeEnumSeries SeriesAttributesTypeEnum = "Series"
)

type SeriesAttributes struct {
	AmazonSubscriptionURL            *string                     `json:"amazon_subscription_url,omitempty"`
	CastboxSubscriptionURL           *string                     `json:"castbox_subscription_url,omitempty"`
	CoverImageID                     *string                     `json:"cover_image_id,omitempty"`
	CreatedAt                        *time.Time                  `json:"created_at,omitempty"`
	Description                      *string                     `json:"description,omitempty"`
	DescriptionIsHTML                *bool                       `json:"description_is_html,omitempty"`
	DescriptionPlain                 *string                     `json:"description_plain,omitempty"`
	FacebookURL                      *string                     `json:"facebook_url,omitempty"`
	GoogleSubscriptionURL            *string                     `json:"google_subscription_url,omitempty"`
	IheartSubscriptionURL            *string                     `json:"iheart_subscription_url,omitempty"`
	InstagramURL                     *string                     `json:"instagram_url,omitempty"`
	ItunesSubscriptionBadgeEnabled   *bool                       `json:"itunes_subscription_badge_enabled,omitempty"`
	ItunesSubscriptionURL            *string                     `json:"itunes_subscription_url,omitempty"`
	LinkedinURL                      *string                     `json:"linkedin_url,omitempty"`
	PocketCastsSubscriptionURL       *string                     `json:"pocket_casts_subscription_url,omitempty"`
	PodcastSubscriptionURL           *string                     `json:"podcast_subscription_url,omitempty"`
	PublicPageEnabled                *bool                       `json:"public_page_enabled,omitempty"`
	PublicTitle                      *string                     `json:"public_title,omitempty"`
	RadioPublicSubscriptionURL       *string                     `json:"radio_public_subscription_url,omitempty"`
	RssAuthor                        *string                     `json:"rss_author,omitempty"`
	RssCopyright                     *string                     `json:"rss_copyright,omitempty"`
	RssEmail                         *string                     `json:"rss_email,omitempty"`
	RssOwner                         *string                     `json:"rss_owner,omitempty"`
	Slug                             *string                     `json:"slug,omitempty"`
	SortTitle                        *string                     `json:"sort_title,omitempty"`
	SpotifySubscriptionBadgeEnabled  *bool                       `json:"spotify_subscription_badge_enabled,omitempty"`
	SpotifySubscriptionURL           *string                     `json:"spotify_subscription_url,omitempty"`
	Status                           *SeriesAttributesStatusEnum `json:"status,omitempty"`
	StitcherSubscriptionBadgeEnabled *bool                       `json:"stitcher_subscription_badge_enabled,omitempty"`
	StitcherSubscriptionURL          *string                     `json:"stitcher_subscription_url,omitempty"`
	Title                            *string                     `json:"title,omitempty"`
	TumblrURL                        *string                     `json:"tumblr_url,omitempty"`
	TuneInSubscriptionURL            *string                     `json:"tune_in_subscription_url,omitempty"`
	TwitterURL                       *string                     `json:"twitter_url,omitempty"`
	Type                             *SeriesAttributesTypeEnum   `json:"type,omitempty"`
	UpdatedAt                        *time.Time                  `json:"updated_at,omitempty"`
	WebsiteURL                       *string                     `json:"website_url,omitempty"`
}

type SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// SeriesRelationshipsCoverImage
// The cover image for the series
type SeriesRelationshipsCoverImage struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsTheCoverImageForTheSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsTheNetworkTheSeriesBelongsTo struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsAListOfSeasonsInTheSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationshipsAListOfTagsAssociatedWithTheSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type SeriesRelationships struct {
	ClassificationInclusions *SeriesRelationshipsAListOfClassificationsAssociatedWithTheSeries            `json:"classification_inclusions,omitempty"`
	CoverImage               *SeriesRelationshipsCoverImage                                               `json:"cover_image,omitempty"`
	Credits                  *SeriesRelationshipsAListOfCreditsGivenToPeopleInTheSeries                   `json:"credits,omitempty"`
	Episodes                 *SeriesRelationshipsAListOfPublishedAndReleasedEpisodesWithAnActualMediaFile `json:"episodes,omitempty"`
	Images                   *SeriesRelationshipsTheCoverImageForTheSeries                                `json:"images,omitempty"`
	Network                  *SeriesRelationshipsTheNetworkTheSeriesBelongsTo                             `json:"network,omitempty"`
	Seasons                  *SeriesRelationshipsAListOfSeasonsInTheSeries                                `json:"seasons,omitempty"`
	Taggings                 *SeriesRelationshipsAListOfAssociationsLinkingTagsToTheSeries                `json:"taggings,omitempty"`
	Tags                     *SeriesRelationshipsAListOfTagsAssociatedWithTheSeries                       `json:"tags,omitempty"`
}

type Series struct {
	Attributes    *SeriesAttributes    `json:"attributes,omitempty"`
	ID            *string              `json:"id,omitempty"`
	Relationships *SeriesRelationships `json:"relationships,omitempty"`
	Type          *string              `json:"type,omitempty"`
}
