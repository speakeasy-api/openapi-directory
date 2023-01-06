package shared

import (
	"time"
)

type ImageAttributesBucketTypeEnum string

const (
	ImageAttributesBucketTypeEnumAdRepAccount ImageAttributesBucketTypeEnum = "AdRepAccount"
	ImageAttributesBucketTypeEnumAgency       ImageAttributesBucketTypeEnum = "Agency"
	ImageAttributesBucketTypeEnumNetwork      ImageAttributesBucketTypeEnum = "Network"
	ImageAttributesBucketTypeEnumSeries       ImageAttributesBucketTypeEnum = "Series"
	ImageAttributesBucketTypeEnumUser         ImageAttributesBucketTypeEnum = "User"
)

type ImageAttributesTheCropAreaWithinTheOriginalMediaAsset struct {
	Height *float32 `json:"height,omitempty"`
	Left   *float32 `json:"left,omitempty"`
	Top    *float32 `json:"top,omitempty"`
	Width  *float32 `json:"width,omitempty"`
}

type ImageAttributesStatusEnum string

const (
	ImageAttributesStatusEnumInvalid    ImageAttributesStatusEnum = "invalid"
	ImageAttributesStatusEnumProcessing ImageAttributesStatusEnum = "processing"
	ImageAttributesStatusEnumUploaded   ImageAttributesStatusEnum = "uploaded"
	ImageAttributesStatusEnumValid      ImageAttributesStatusEnum = "valid"
)

type ImageAttributes struct {
	BucketID   *string                                                `json:"bucket_id,omitempty"`
	BucketType *ImageAttributesBucketTypeEnum                         `json:"bucket_type,omitempty"`
	CreatedAt  *time.Time                                             `json:"created_at,omitempty"`
	CropData   *ImageAttributesTheCropAreaWithinTheOriginalMediaAsset `json:"crop_data,omitempty"`
	Status     *ImageAttributesStatusEnum                             `json:"status,omitempty"`
	UpdatedAt  *time.Time                                             `json:"updated_at,omitempty"`
}

type ImageRelationshipsAllMediaAssetsAvailableForThisImage struct {
	Data []ResourceIdentifier `json:"data,omitempty"`
}

type ImageRelationships struct {
	MediaAssets *ImageRelationshipsAllMediaAssetsAvailableForThisImage `json:"media_assets,omitempty"`
}

type Image struct {
	Attributes    *ImageAttributes    `json:"attributes,omitempty"`
	ID            *string             `json:"id,omitempty"`
	Relationships *ImageRelationships `json:"relationships,omitempty"`
	Type          *string             `json:"type,omitempty"`
}
