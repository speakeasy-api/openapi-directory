package operations

type GetDeleteDbParameterGroupActionEnum string

const (
	GETDeleteDBParameterGroupActionEnumDeleteDbParameterGroup GetDeleteDbParameterGroupActionEnum = "DeleteDBParameterGroup"
)

type GetDeleteDbParameterGroupVersionEnum string

const (
	GETDeleteDBParameterGroupVersionEnumTwoThousandAndThirteen0909 GetDeleteDbParameterGroupVersionEnum = "2013-09-09"
)

type GetDeleteDbParameterGroupQueryParams struct {
	Action               GetDeleteDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBParameterGroupName string                               `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Version              GetDeleteDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteDbParameterGroupRequest struct {
	QueryParams GetDeleteDbParameterGroupQueryParams
	Headers     GetDeleteDbParameterGroupHeaders
}

type GetDeleteDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
