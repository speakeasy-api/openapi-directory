package operations

type GetResetInstanceAttributeActionEnum string

const (
	GETResetInstanceAttributeActionEnumResetInstanceAttribute GetResetInstanceAttributeActionEnum = "ResetInstanceAttribute"
)

type GetResetInstanceAttributeAttributeEnum string

const (
	GETResetInstanceAttributeAttributeEnumInstanceType                      GetResetInstanceAttributeAttributeEnum = "instanceType"
	GETResetInstanceAttributeAttributeEnumKernel                            GetResetInstanceAttributeAttributeEnum = "kernel"
	GETResetInstanceAttributeAttributeEnumRamdisk                           GetResetInstanceAttributeAttributeEnum = "ramdisk"
	GETResetInstanceAttributeAttributeEnumUserData                          GetResetInstanceAttributeAttributeEnum = "userData"
	GETResetInstanceAttributeAttributeEnumDisableAPITermination             GetResetInstanceAttributeAttributeEnum = "disableApiTermination"
	GETResetInstanceAttributeAttributeEnumInstanceInitiatedShutdownBehavior GetResetInstanceAttributeAttributeEnum = "instanceInitiatedShutdownBehavior"
	GETResetInstanceAttributeAttributeEnumRootDeviceName                    GetResetInstanceAttributeAttributeEnum = "rootDeviceName"
	GETResetInstanceAttributeAttributeEnumBlockDeviceMapping                GetResetInstanceAttributeAttributeEnum = "blockDeviceMapping"
	GETResetInstanceAttributeAttributeEnumProductCodes                      GetResetInstanceAttributeAttributeEnum = "productCodes"
	GETResetInstanceAttributeAttributeEnumSourceDestCheck                   GetResetInstanceAttributeAttributeEnum = "sourceDestCheck"
	GETResetInstanceAttributeAttributeEnumGroupSet                          GetResetInstanceAttributeAttributeEnum = "groupSet"
	GETResetInstanceAttributeAttributeEnumEbsOptimized                      GetResetInstanceAttributeAttributeEnum = "ebsOptimized"
	GETResetInstanceAttributeAttributeEnumSriovNetSupport                   GetResetInstanceAttributeAttributeEnum = "sriovNetSupport"
	GETResetInstanceAttributeAttributeEnumEnaSupport                        GetResetInstanceAttributeAttributeEnum = "enaSupport"
	GETResetInstanceAttributeAttributeEnumEnclaveOptions                    GetResetInstanceAttributeAttributeEnum = "enclaveOptions"
)

type GetResetInstanceAttributeVersionEnum string

const (
	GETResetInstanceAttributeVersionEnumTwoThousandAndSixteen1115 GetResetInstanceAttributeVersionEnum = "2016-11-15"
)

type GetResetInstanceAttributeQueryParams struct {
	Action     GetResetInstanceAttributeActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Attribute  GetResetInstanceAttributeAttributeEnum `queryParam:"style=form,explode=true,name=Attribute"`
	DryRun     *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID string                                 `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetResetInstanceAttributeVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetResetInstanceAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetResetInstanceAttributeRequest struct {
	QueryParams GetResetInstanceAttributeQueryParams
	Headers     GetResetInstanceAttributeHeaders
}

type GetResetInstanceAttributeResponse struct {
	ContentType string
	StatusCode  int64
}
