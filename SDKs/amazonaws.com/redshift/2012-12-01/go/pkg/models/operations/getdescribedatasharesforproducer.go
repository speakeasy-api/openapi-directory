package operations

type GetDescribeDataSharesForProducerActionEnum string

const (
	GETDescribeDataSharesForProducerActionEnumDescribeDataSharesForProducer GetDescribeDataSharesForProducerActionEnum = "DescribeDataSharesForProducer"
)

type GetDescribeDataSharesForProducerStatusEnum string

const (
	GETDescribeDataSharesForProducerStatusEnumActive               GetDescribeDataSharesForProducerStatusEnum = "ACTIVE"
	GETDescribeDataSharesForProducerStatusEnumAuthorized           GetDescribeDataSharesForProducerStatusEnum = "AUTHORIZED"
	GETDescribeDataSharesForProducerStatusEnumPendingAuthorization GetDescribeDataSharesForProducerStatusEnum = "PENDING_AUTHORIZATION"
	GETDescribeDataSharesForProducerStatusEnumDeauthorized         GetDescribeDataSharesForProducerStatusEnum = "DEAUTHORIZED"
	GETDescribeDataSharesForProducerStatusEnumRejected             GetDescribeDataSharesForProducerStatusEnum = "REJECTED"
)

type GetDescribeDataSharesForProducerVersionEnum string

const (
	GETDescribeDataSharesForProducerVersionEnumTwoThousandAndTwelve1201 GetDescribeDataSharesForProducerVersionEnum = "2012-12-01"
)

type GetDescribeDataSharesForProducerQueryParams struct {
	Action      GetDescribeDataSharesForProducerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker      *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords  *int64                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	ProducerArn *string                                     `queryParam:"style=form,explode=true,name=ProducerArn"`
	Status      *GetDescribeDataSharesForProducerStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	Version     GetDescribeDataSharesForProducerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDataSharesForProducerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDataSharesForProducerRequest struct {
	QueryParams GetDescribeDataSharesForProducerQueryParams
	Headers     GetDescribeDataSharesForProducerHeaders
}

type GetDescribeDataSharesForProducerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
