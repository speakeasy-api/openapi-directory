package shared

import (
	"time"
)

type ClassificationInclusionAttributesClassificationTypeEnum string

const (
	ClassificationInclusionAttributesClassificationTypeEnumAlternateFeedType ClassificationInclusionAttributesClassificationTypeEnum = "AlternateFeedType"
	ClassificationInclusionAttributesClassificationTypeEnumGenre             ClassificationInclusionAttributesClassificationTypeEnum = "Genre"
	ClassificationInclusionAttributesClassificationTypeEnumIndustry          ClassificationInclusionAttributesClassificationTypeEnum = "Industry"
	ClassificationInclusionAttributesClassificationTypeEnumLanguage          ClassificationInclusionAttributesClassificationTypeEnum = "Language"
	ClassificationInclusionAttributesClassificationTypeEnumMediaRating       ClassificationInclusionAttributesClassificationTypeEnum = "MediaRating"
)

type ClassificationInclusionAttributesClassifiedTypeEnum string

const (
	ClassificationInclusionAttributesClassifiedTypeEnumSeries  ClassificationInclusionAttributesClassifiedTypeEnum = "Series"
	ClassificationInclusionAttributesClassifiedTypeEnumSeason  ClassificationInclusionAttributesClassifiedTypeEnum = "Season"
	ClassificationInclusionAttributesClassifiedTypeEnumEpisode ClassificationInclusionAttributesClassifiedTypeEnum = "Episode"
)

type ClassificationInclusionAttributes struct {
	ClassificationID   *string                                                  `json:"classification_id,omitempty"`
	ClassificationType *ClassificationInclusionAttributesClassificationTypeEnum `json:"classification_type,omitempty"`
	ClassifiedID       *string                                                  `json:"classified_id,omitempty"`
	ClassifiedType     *ClassificationInclusionAttributesClassifiedTypeEnum     `json:"classified_type,omitempty"`
	CreatedAt          *time.Time                                               `json:"created_at,omitempty"`
	Position           *int64                                                   `json:"position,omitempty"`
	Primary            *bool                                                    `json:"primary,omitempty"`
	UpdatedAt          *time.Time                                               `json:"updated_at,omitempty"`
}

type ClassificationInclusionRelationshipsClassification struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type ClassificationInclusionRelationships struct {
	Classification *ClassificationInclusionRelationshipsClassification `json:"classification,omitempty"`
}

// ClassificationInclusion
// Connects a Classification with a classified item like a Series, Season or Episode.
type ClassificationInclusion struct {
	Attributes    *ClassificationInclusionAttributes    `json:"attributes,omitempty"`
	ID            *string                               `json:"id,omitempty"`
	Relationships *ClassificationInclusionRelationships `json:"relationships,omitempty"`
	Type          *string                               `json:"type,omitempty"`
}
