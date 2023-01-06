package operations

type HeadKeyPkPathParams struct {
	PK string `pathParam:"style=simple,explode=false,name=PK"`
}

type HeadKeyPkRequest struct {
	PathParams HeadKeyPkPathParams
}

type HeadKeyPkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
