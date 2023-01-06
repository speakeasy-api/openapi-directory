package operations

type GetGetDefaultCreditSpecificationActionEnum string

const (
	GETGETDefaultCreditSpecificationActionEnumGetDefaultCreditSpecification GetGetDefaultCreditSpecificationActionEnum = "GetDefaultCreditSpecification"
)

type GetGetDefaultCreditSpecificationInstanceFamilyEnum string

const (
	GETGETDefaultCreditSpecificationInstanceFamilyEnumT2  GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t2"
	GETGETDefaultCreditSpecificationInstanceFamilyEnumT3  GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t3"
	GETGETDefaultCreditSpecificationInstanceFamilyEnumT3a GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t3a"
	GETGETDefaultCreditSpecificationInstanceFamilyEnumT4g GetGetDefaultCreditSpecificationInstanceFamilyEnum = "t4g"
)

type GetGetDefaultCreditSpecificationVersionEnum string

const (
	GETGETDefaultCreditSpecificationVersionEnumTwoThousandAndSixteen1115 GetGetDefaultCreditSpecificationVersionEnum = "2016-11-15"
)

type GetGetDefaultCreditSpecificationQueryParams struct {
	Action         GetGetDefaultCreditSpecificationActionEnum         `queryParam:"style=form,explode=true,name=Action"`
	DryRun         *bool                                              `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceFamily GetGetDefaultCreditSpecificationInstanceFamilyEnum `queryParam:"style=form,explode=true,name=InstanceFamily"`
	Version        GetGetDefaultCreditSpecificationVersionEnum        `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetDefaultCreditSpecificationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetDefaultCreditSpecificationRequest struct {
	QueryParams GetGetDefaultCreditSpecificationQueryParams
	Headers     GetGetDefaultCreditSpecificationHeaders
}

type GetGetDefaultCreditSpecificationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
