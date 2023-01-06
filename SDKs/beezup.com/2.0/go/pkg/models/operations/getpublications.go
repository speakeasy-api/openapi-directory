package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicationsPathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type GetPublicationsPublicationTypesEnum string

const (
	GetPublicationsPublicationTypesEnumPublishProducts GetPublicationsPublicationTypesEnum = "PublishProducts"
	GetPublicationsPublicationTypesEnumPublishOffers   GetPublicationsPublicationTypesEnum = "PublishOffers"
	GetPublicationsPublicationTypesEnumUnpublish       GetPublicationsPublicationTypesEnum = "Unpublish"
)

type GetPublicationsQueryParams struct {
	ChannelCatalogID *string                               `queryParam:"style=form,explode=true,name=channelCatalogId"`
	Count            *int32                                `queryParam:"style=form,explode=true,name=count"`
	PublicationTypes []GetPublicationsPublicationTypesEnum `queryParam:"style=form,explode=false,name=publicationTypes"`
}

type GetPublicationsRequest struct {
	PathParams  GetPublicationsPathParams
	QueryParams GetPublicationsQueryParams
}

type GetPublicationsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
	AccountPublications              *shared.AccountPublications
}
