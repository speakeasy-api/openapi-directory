package operations

type PostDeleteReplicationGroupActionEnum string

const (
	POSTDeleteReplicationGroupActionEnumDeleteReplicationGroup PostDeleteReplicationGroupActionEnum = "DeleteReplicationGroup"
)

type PostDeleteReplicationGroupVersionEnum string

const (
	POSTDeleteReplicationGroupVersionEnumTwoThousandAndFifteen0202 PostDeleteReplicationGroupVersionEnum = "2015-02-02"
)

type PostDeleteReplicationGroupQueryParams struct {
	Action  PostDeleteReplicationGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteReplicationGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteReplicationGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteReplicationGroupRequest struct {
	QueryParams PostDeleteReplicationGroupQueryParams
	Headers     PostDeleteReplicationGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteReplicationGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
