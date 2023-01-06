package shared

import (
	"time"
)

type CreditAttributesCreditableTypeEnum string

const (
	CreditAttributesCreditableTypeEnumSeries  CreditAttributesCreditableTypeEnum = "Series"
	CreditAttributesCreditableTypeEnumSeason  CreditAttributesCreditableTypeEnum = "Season"
	CreditAttributesCreditableTypeEnumEpisode CreditAttributesCreditableTypeEnum = "Episode"
)

type CreditAttributesTypeEnum string

const (
	CreditAttributesTypeEnumAnchorCredit            CreditAttributesTypeEnum = "AnchorCredit"
	CreditAttributesTypeEnumAssociateProducerCredit CreditAttributesTypeEnum = "AssociateProducerCredit"
	CreditAttributesTypeEnumAuthorCredit            CreditAttributesTypeEnum = "AuthorCredit"
	CreditAttributesTypeEnumCastCredit              CreditAttributesTypeEnum = "CastCredit"
	CreditAttributesTypeEnumCoHostCredit            CreditAttributesTypeEnum = "CoHostCredit"
	CreditAttributesTypeEnumComposerCredit          CreditAttributesTypeEnum = "ComposerCredit"
	CreditAttributesTypeEnumCreatorCredit           CreditAttributesTypeEnum = "CreatorCredit"
	CreditAttributesTypeEnumCredit                  CreditAttributesTypeEnum = "Credit"
	CreditAttributesTypeEnumDirectorCredit          CreditAttributesTypeEnum = "DirectorCredit"
	CreditAttributesTypeEnumEditorCredit            CreditAttributesTypeEnum = "EditorCredit"
	CreditAttributesTypeEnumEngineerCredit          CreditAttributesTypeEnum = "EngineerCredit"
	CreditAttributesTypeEnumExecutiveProducerCredit CreditAttributesTypeEnum = "ExecutiveProducerCredit"
	CreditAttributesTypeEnumGuestCoHostCredit       CreditAttributesTypeEnum = "GuestCoHostCredit"
	CreditAttributesTypeEnumGuestCredit             CreditAttributesTypeEnum = "GuestCredit"
	CreditAttributesTypeEnumGuestHostCredit         CreditAttributesTypeEnum = "GuestHostCredit"
	CreditAttributesTypeEnumHeadWriterCredit        CreditAttributesTypeEnum = "HeadWriterCredit"
	CreditAttributesTypeEnumHostCredit              CreditAttributesTypeEnum = "HostCredit"
	CreditAttributesTypeEnumProducerCredit          CreditAttributesTypeEnum = "ProducerCredit"
	CreditAttributesTypeEnumReporterCredit          CreditAttributesTypeEnum = "ReporterCredit"
	CreditAttributesTypeEnumSeniorProducerCredit    CreditAttributesTypeEnum = "SeniorProducerCredit"
	CreditAttributesTypeEnumSidekickCredit          CreditAttributesTypeEnum = "SidekickCredit"
	CreditAttributesTypeEnumVideoProducerCredit     CreditAttributesTypeEnum = "VideoProducerCredit"
	CreditAttributesTypeEnumWriterCredit            CreditAttributesTypeEnum = "WriterCredit"
)

type CreditAttributes struct {
	CreatedAt      *time.Time                          `json:"created_at,omitempty"`
	CreditableID   *string                             `json:"creditable_id,omitempty"`
	CreditableType *CreditAttributesCreditableTypeEnum `json:"creditable_type,omitempty"`
	Position       *int64                              `json:"position,omitempty"`
	Type           *CreditAttributesTypeEnum           `json:"type,omitempty"`
	UpdatedAt      *time.Time                          `json:"updated_at,omitempty"`
}

type CreditRelationshipsPerson struct {
	Data *ResourceIdentifier `json:"data,omitempty"`
}

type CreditRelationships struct {
	Person *CreditRelationshipsPerson `json:"person,omitempty"`
}

// Credit
// A credit links a specific person to a series, season, or episode in a specific role.
type Credit struct {
	Attributes    *CreditAttributes    `json:"attributes,omitempty"`
	ID            *string              `json:"id,omitempty"`
	Relationships *CreditRelationships `json:"relationships,omitempty"`
	Type          *string              `json:"type,omitempty"`
}
