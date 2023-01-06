package shared

import (
	"time"
)

type NetworkAttributes struct {
	Copyright         *string    `json:"copyright,omitempty"`
	CreatedAt         *time.Time `json:"created_at,omitempty"`
	Description       *string    `json:"description,omitempty"`
	DescriptionIsHTML *bool      `json:"description_is_html,omitempty"`
	DescriptionPlain  *string    `json:"description_plain,omitempty"`
	FacebookURL       *string    `json:"facebook_url,omitempty"`
	InstagramURL      *string    `json:"instagram_url,omitempty"`
	LinkedinURL       *string    `json:"linkedin_url,omitempty"`
	Name              *string    `json:"name,omitempty"`
	PublicEmail       *string    `json:"public_email,omitempty"`
	PublicPageEnabled *bool      `json:"public_page_enabled,omitempty"`
	Slug              *string    `json:"slug,omitempty"`
	TumblrURL         *string    `json:"tumblr_url,omitempty"`
	TwitterURL        *string    `json:"twitter_url,omitempty"`
	UpdatedAt         *time.Time `json:"updated_at,omitempty"`
	WebsiteURL        *string    `json:"website_url,omitempty"`
}

// NetworkRelationshipsCoverImage
// The cover image for the network
type NetworkRelationshipsCoverImage struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

// NetworkRelationshipsImages
// A collection of images linked to the network. This currently only includes
// the cover image for the network.
type NetworkRelationshipsImages struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

// NetworkRelationshipsParent
// The parent network of the network
type NetworkRelationshipsParent struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

// NetworkRelationshipsSeries
// List of series within the network which are accessible to you
type NetworkRelationshipsSeries struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type NetworkRelationships struct {
	CoverImage *NetworkRelationshipsCoverImage `json:"cover_image,omitempty"`
	Images     *NetworkRelationshipsImages     `json:"images,omitempty"`
	Parent     *NetworkRelationshipsParent     `json:"parent,omitempty"`
	Series     *NetworkRelationshipsSeries     `json:"series,omitempty"`
}

type Network struct {
	Attributes    *NetworkAttributes    `json:"attributes,omitempty"`
	ID            *string               `json:"id,omitempty"`
	Relationships *NetworkRelationships `json:"relationships,omitempty"`
	Type          *string               `json:"type,omitempty"`
}
