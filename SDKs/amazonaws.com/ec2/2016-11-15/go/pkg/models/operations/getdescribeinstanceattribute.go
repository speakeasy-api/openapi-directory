package operations

type GetDescribeInstanceAttributeActionEnum string

const (
	GETDescribeInstanceAttributeActionEnumDescribeInstanceAttribute GetDescribeInstanceAttributeActionEnum = "DescribeInstanceAttribute"
)

type GetDescribeInstanceAttributeAttributeEnum string

const (
	GETDescribeInstanceAttributeAttributeEnumInstanceType                      GetDescribeInstanceAttributeAttributeEnum = "instanceType"
	GETDescribeInstanceAttributeAttributeEnumKernel                            GetDescribeInstanceAttributeAttributeEnum = "kernel"
	GETDescribeInstanceAttributeAttributeEnumRamdisk                           GetDescribeInstanceAttributeAttributeEnum = "ramdisk"
	GETDescribeInstanceAttributeAttributeEnumUserData                          GetDescribeInstanceAttributeAttributeEnum = "userData"
	GETDescribeInstanceAttributeAttributeEnumDisableAPITermination             GetDescribeInstanceAttributeAttributeEnum = "disableApiTermination"
	GETDescribeInstanceAttributeAttributeEnumInstanceInitiatedShutdownBehavior GetDescribeInstanceAttributeAttributeEnum = "instanceInitiatedShutdownBehavior"
	GETDescribeInstanceAttributeAttributeEnumRootDeviceName                    GetDescribeInstanceAttributeAttributeEnum = "rootDeviceName"
	GETDescribeInstanceAttributeAttributeEnumBlockDeviceMapping                GetDescribeInstanceAttributeAttributeEnum = "blockDeviceMapping"
	GETDescribeInstanceAttributeAttributeEnumProductCodes                      GetDescribeInstanceAttributeAttributeEnum = "productCodes"
	GETDescribeInstanceAttributeAttributeEnumSourceDestCheck                   GetDescribeInstanceAttributeAttributeEnum = "sourceDestCheck"
	GETDescribeInstanceAttributeAttributeEnumGroupSet                          GetDescribeInstanceAttributeAttributeEnum = "groupSet"
	GETDescribeInstanceAttributeAttributeEnumEbsOptimized                      GetDescribeInstanceAttributeAttributeEnum = "ebsOptimized"
	GETDescribeInstanceAttributeAttributeEnumSriovNetSupport                   GetDescribeInstanceAttributeAttributeEnum = "sriovNetSupport"
	GETDescribeInstanceAttributeAttributeEnumEnaSupport                        GetDescribeInstanceAttributeAttributeEnum = "enaSupport"
	GETDescribeInstanceAttributeAttributeEnumEnclaveOptions                    GetDescribeInstanceAttributeAttributeEnum = "enclaveOptions"
)

type GetDescribeInstanceAttributeVersionEnum string

const (
	GETDescribeInstanceAttributeVersionEnumTwoThousandAndSixteen1115 GetDescribeInstanceAttributeVersionEnum = "2016-11-15"
)

type GetDescribeInstanceAttributeQueryParams struct {
	Action     GetDescribeInstanceAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute  GetDescribeInstanceAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun     *bool                                     `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                                    `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetDescribeInstanceAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeInstanceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeInstanceAttributeRequest struct {
	QueryParams GetDescribeInstanceAttributeQueryParams
	Headers     GetDescribeInstanceAttributeHeaders
}

type GetDescribeInstanceAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
