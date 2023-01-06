package operations

type GetListTagsForResourceActionEnum string

const (
	GETListTagsForResourceActionEnumListTagsForResource GetListTagsForResourceActionEnum = "ListTagsForResource"
)

type GetListTagsForResourceVersionEnum string

const (
	GETListTagsForResourceVersionEnumTwoThousandAndTen0801 GetListTagsForResourceVersionEnum = "2010-08-01"
)

type GetListTagsForResourceQueryParams struct {
	Action      GetListTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ResourceARN string                            `queryParam:"style=form,explode=true,name=ResourceARN"`
	Version     GetListTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetListTagsForResourceRequest struct {
	QueryParams GetListTagsForResourceQueryParams
	Headers     GetListTagsForResourceHeaders
}

type GetListTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
