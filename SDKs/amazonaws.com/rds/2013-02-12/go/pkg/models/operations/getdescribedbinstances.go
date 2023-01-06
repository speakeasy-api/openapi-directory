package operations

type GetDescribeDbInstancesActionEnum string

const (
	GETDescribeDBInstancesActionEnumDescribeDbInstances GetDescribeDbInstancesActionEnum = "DescribeDBInstances"
)

type GetDescribeDbInstancesVersionEnum string

const (
	GETDescribeDBInstancesVersionEnumTwoThousandAndThirteen0212 GetDescribeDbInstancesVersionEnum = "2013-02-12"
)

type GetDescribeDbInstancesQueryParams struct {
	Action               GetDescribeDbInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBInstanceIdentifier *string                           `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	Marker               *string                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                            `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version              GetDescribeDbInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDbInstancesRequest struct {
	QueryParams GetDescribeDbInstancesQueryParams
	Headers     GetDescribeDbInstancesHeaders
}

type GetDescribeDbInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
