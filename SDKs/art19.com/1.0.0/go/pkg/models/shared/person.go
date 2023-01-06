package shared

import (
	"time"
)

type PersonAttributes struct {
	AvatarID     *string    `json:"avatar_id,omitempty"`
	Biography    *string    `json:"biography,omitempty"`
	Born         *time.Time `json:"born,omitempty"`
	CreatedAt    *time.Time `json:"created_at,omitempty"`
	Died         *time.Time `json:"died,omitempty"`
	FirstName    *string    `json:"first_name,omitempty"`
	FromCountry  *string    `json:"from_country,omitempty"`
	FromLocality *string    `json:"from_locality,omitempty"`
	FromRegion   *string    `json:"from_region,omitempty"`
	LastName     *string    `json:"last_name,omitempty"`
	PublicEmail  *string    `json:"public_email,omitempty"`
	UpdatedAt    *time.Time `json:"updated_at,omitempty"`
}

// PersonRelationshipsAvatar
// The avatar or head shot of the person. Details can be retrieved using the `/images` endpoint.
type PersonRelationshipsAvatar struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type PersonRelationships struct {
	Avatar *PersonRelationshipsAvatar `json:"avatar,omitempty"`
}

type Person struct {
	Attributes    *PersonAttributes    `json:"attributes,omitempty"`
	ID            *string              `json:"id,omitempty"`
	Relationships *PersonRelationships `json:"relationships,omitempty"`
	Type          *string              `json:"type,omitempty"`
}
