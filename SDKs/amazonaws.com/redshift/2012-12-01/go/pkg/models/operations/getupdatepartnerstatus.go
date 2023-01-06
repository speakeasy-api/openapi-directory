package operations

type GetUpdatePartnerStatusActionEnum string

const (
	GETUpdatePartnerStatusActionEnumUpdatePartnerStatus GetUpdatePartnerStatusActionEnum = "UpdatePartnerStatus"
)

type GetUpdatePartnerStatusStatusEnum string

const (
	GETUpdatePartnerStatusStatusEnumActive            GetUpdatePartnerStatusStatusEnum = "Active"
	GETUpdatePartnerStatusStatusEnumInactive          GetUpdatePartnerStatusStatusEnum = "Inactive"
	GETUpdatePartnerStatusStatusEnumRuntimeFailure    GetUpdatePartnerStatusStatusEnum = "RuntimeFailure"
	GETUpdatePartnerStatusStatusEnumConnectionFailure GetUpdatePartnerStatusStatusEnum = "ConnectionFailure"
)

type GetUpdatePartnerStatusVersionEnum string

const (
	GETUpdatePartnerStatusVersionEnumTwoThousandAndTwelve1201 GetUpdatePartnerStatusVersionEnum = "2012-12-01"
)

type GetUpdatePartnerStatusQueryParams struct {
	AccountID         string                            `queryParam:"style=form,explode=true,name=AccountId"`
	Action            GetUpdatePartnerStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                            `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DatabaseName      string                            `queryParam:"style=form,explode=true,name=DatabaseName"`
	PartnerName       string                            `queryParam:"style=form,explode=true,name=PartnerName"`
	Status            GetUpdatePartnerStatusStatusEnum  `queryParam:"style=form,explode=true,name=Status"`
	StatusMessage     *string                           `queryParam:"style=form,explode=true,name=StatusMessage"`
	Version           GetUpdatePartnerStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdatePartnerStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetUpdatePartnerStatusRequest struct {
	QueryParams GetUpdatePartnerStatusQueryParams
	Headers     GetUpdatePartnerStatusHeaders
}

type GetUpdatePartnerStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
