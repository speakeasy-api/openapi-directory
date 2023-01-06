package operations

type GetDescribeImageAttributeActionEnum string

const (
	GETDescribeImageAttributeActionEnumDescribeImageAttribute GetDescribeImageAttributeActionEnum = "DescribeImageAttribute"
)

type GetDescribeImageAttributeAttributeEnum string

const (
	GETDescribeImageAttributeAttributeEnumDescription        GetDescribeImageAttributeAttributeEnum = "description"
	GETDescribeImageAttributeAttributeEnumKernel             GetDescribeImageAttributeAttributeEnum = "kernel"
	GETDescribeImageAttributeAttributeEnumRamdisk            GetDescribeImageAttributeAttributeEnum = "ramdisk"
	GETDescribeImageAttributeAttributeEnumLaunchPermission   GetDescribeImageAttributeAttributeEnum = "launchPermission"
	GETDescribeImageAttributeAttributeEnumProductCodes       GetDescribeImageAttributeAttributeEnum = "productCodes"
	GETDescribeImageAttributeAttributeEnumBlockDeviceMapping GetDescribeImageAttributeAttributeEnum = "blockDeviceMapping"
	GETDescribeImageAttributeAttributeEnumSriovNetSupport    GetDescribeImageAttributeAttributeEnum = "sriovNetSupport"
	GETDescribeImageAttributeAttributeEnumBootMode           GetDescribeImageAttributeAttributeEnum = "bootMode"
)

type GetDescribeImageAttributeVersionEnum string

const (
	GETDescribeImageAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeImageAttributeVersionEnum = "2016-11-15"
)

type GetDescribeImageAttributeQueryParams struct {
	Action    GetDescribeImageAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute GetDescribeImageAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun    *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	ImageID   string                                 `queryParam:"style=form,explode=true,name=ImageId"`
	Version   GetDescribeImageAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeImageAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeImageAttributeRequest struct {
	QueryParams GetDescribeImageAttributeQueryParams
	Headers     GetDescribeImageAttributeHeaders
}

type GetDescribeImageAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
