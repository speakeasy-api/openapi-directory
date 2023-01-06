package operations

type GetPurchaseReservedDbInstancesOfferingActionEnum string

const (
	GETPurchaseReservedDBInstancesOfferingActionEnumPurchaseReservedDbInstancesOffering GetPurchaseReservedDbInstancesOfferingActionEnum = "PurchaseReservedDBInstancesOffering"
)

type GetPurchaseReservedDbInstancesOfferingVersionEnum string

const (
	GETPurchaseReservedDBInstancesOfferingVersionEnumTwoThousandAndThirteen0110 GetPurchaseReservedDbInstancesOfferingVersionEnum = "2013-01-10"
)

type GetPurchaseReservedDbInstancesOfferingQueryParams struct {
	Action                        GetPurchaseReservedDbInstancesOfferingActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBInstanceCount               *int64                                            `queryParam:"style=form,explode=true,name=DBInstanceCount"`
	ReservedDBInstanceID          *string                                           `queryParam:"style=form,explode=true,name=ReservedDBInstanceId"`
	ReservedDBInstancesOfferingID string                                            `queryParam:"style=form,explode=true,name=ReservedDBInstancesOfferingId"`
	Version                       GetPurchaseReservedDbInstancesOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPurchaseReservedDbInstancesOfferingHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPurchaseReservedDbInstancesOfferingRequest struct {
	QueryParams GetPurchaseReservedDbInstancesOfferingQueryParams
	Headers     GetPurchaseReservedDbInstancesOfferingHeaders
}

type GetPurchaseReservedDbInstancesOfferingResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
