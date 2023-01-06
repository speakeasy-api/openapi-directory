package shared

import (
	"time"
)

type MediaAssetAttributesAttachmentTypeEnum string

const (
	MediaAssetAttributesAttachmentTypeEnumImage       MediaAssetAttributesAttachmentTypeEnum = "Image"
	MediaAssetAttributesAttachmentTypeEnumSegment     MediaAssetAttributesAttachmentTypeEnum = "Segment"
	MediaAssetAttributesAttachmentTypeEnumSegmentList MediaAssetAttributesAttachmentTypeEnum = "SegmentList"
)

type MediaAssetAttributesStyleEnum string

const (
	MediaAssetAttributesStyleEnumInfo             MediaAssetAttributesStyleEnum = "info"
	MediaAssetAttributesStyleEnumItunes           MediaAssetAttributesStyleEnum = "itunes"
	MediaAssetAttributesStyleEnumMedium           MediaAssetAttributesStyleEnum = "medium"
	MediaAssetAttributesStyleEnumOriginal         MediaAssetAttributesStyleEnum = "original"
	MediaAssetAttributesStyleEnumRegular          MediaAssetAttributesStyleEnum = "regular"
	MediaAssetAttributesStyleEnumSquare400        MediaAssetAttributesStyleEnum = "square-400"
	MediaAssetAttributesStyleEnumSquare640        MediaAssetAttributesStyleEnum = "square-640"
	MediaAssetAttributesStyleEnumSquare888        MediaAssetAttributesStyleEnum = "square-888"
	MediaAssetAttributesStyleEnumSquare3000       MediaAssetAttributesStyleEnum = "square-3000"
	MediaAssetAttributesStyleEnumStrippedOriginal MediaAssetAttributesStyleEnum = "stripped-original"
	MediaAssetAttributesStyleEnumThumb            MediaAssetAttributesStyleEnum = "thumb"
	MediaAssetAttributesStyleEnumWaveformData     MediaAssetAttributesStyleEnum = "waveform_data"
)

type MediaAssetAttributes struct {
	AttachmentID   *string                                 `json:"attachment_id,omitempty"`
	AttachmentType *MediaAssetAttributesAttachmentTypeEnum `json:"attachment_type,omitempty"`
	CdnURL         *string                                 `json:"cdn_url,omitempty"`
	ContentType    *string                                 `json:"content_type,omitempty"`
	CreatedAt      *time.Time                              `json:"created_at,omitempty"`
	FileName       *string                                 `json:"file_name,omitempty"`
	FileSize       *int64                                  `json:"file_size,omitempty"`
	SizeHeight     *int64                                  `json:"size_height,omitempty"`
	SizeWidth      *int64                                  `json:"size_width,omitempty"`
	Style          *MediaAssetAttributesStyleEnum          `json:"style,omitempty"`
	UpdatedAt      *time.Time                              `json:"updated_at,omitempty"`
}

type MediaAsset struct {
	Attributes *MediaAssetAttributes `json:"attributes,omitempty"`
	ID         *string               `json:"id,omitempty"`
	Type       *string               `json:"type,omitempty"`
}
