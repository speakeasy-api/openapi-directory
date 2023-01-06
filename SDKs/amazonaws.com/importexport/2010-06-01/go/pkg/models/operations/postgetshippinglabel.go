package operations

type PostGetShippingLabelActionEnum string

const (
	POSTGetShippingLabelActionEnumGetShippingLabel PostGetShippingLabelActionEnum = "GetShippingLabel"
)

type PostGetShippingLabelOperationEnum string

const (
	POSTGetShippingLabelOperationEnumGetShippingLabel PostGetShippingLabelOperationEnum = "GetShippingLabel"
)

type PostGetShippingLabelVersionEnum string

const (
	POSTGetShippingLabelVersionEnumTwoThousandAndTen0601 PostGetShippingLabelVersionEnum = "2010-06-01"
)

type PostGetShippingLabelQueryParams struct {
	AWSAccessKeyID   string                            `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
	Action           PostGetShippingLabelActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Operation        PostGetShippingLabelOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
	Signature        string                            `queryParam:"style=form,explode=true,name=Signature"`
	SignatureMethod  string                            `queryParam:"style=form,explode=true,name=SignatureMethod"`
	SignatureVersion string                            `queryParam:"style=form,explode=true,name=SignatureVersion"`
	Timestamp        string                            `queryParam:"style=form,explode=true,name=Timestamp"`
	Version          PostGetShippingLabelVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetShippingLabelRequest struct {
	QueryParams PostGetShippingLabelQueryParams
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetShippingLabelResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
