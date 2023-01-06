package shared

type PublicationTypeEnum string

const (
	PublicationTypeEnumPublishProducts PublicationTypeEnum = "PublishProducts"
	PublicationTypeEnumPublishOffers   PublicationTypeEnum = "PublishOffers"
	PublicationTypeEnumUnpublish       PublicationTypeEnum = "Unpublish"
)
