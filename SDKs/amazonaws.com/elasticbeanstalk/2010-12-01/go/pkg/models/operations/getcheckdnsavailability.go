package operations

type GetCheckDNSAvailabilityActionEnum string

const (
	GETCheckDNSAvailabilityActionEnumCheckDNSAvailability GetCheckDNSAvailabilityActionEnum = "CheckDNSAvailability"
)

type GetCheckDNSAvailabilityVersionEnum string

const (
	GETCheckDNSAvailabilityVersionEnumTwoThousandAndTen1201 GetCheckDNSAvailabilityVersionEnum = "2010-12-01"
)

type GetCheckDNSAvailabilityQueryParams struct {
	Action      GetCheckDNSAvailabilityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CNAMEPrefix string                             `queryParam:"style=form,explode=true,name=CNAMEPrefix"`
	Version     GetCheckDNSAvailabilityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCheckDNSAvailabilityHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCheckDNSAvailabilityRequest struct {
	QueryParams GetCheckDNSAvailabilityQueryParams
	Headers     GetCheckDNSAvailabilityHeaders
}

type GetCheckDNSAvailabilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
