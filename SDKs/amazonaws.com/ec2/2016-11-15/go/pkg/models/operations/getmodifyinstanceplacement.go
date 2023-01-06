package operations

type GetModifyInstancePlacementActionEnum string

const (
	GETModifyInstancePlacementActionEnumModifyInstancePlacement GetModifyInstancePlacementActionEnum = "ModifyInstancePlacement"
)

type GetModifyInstancePlacementAffinityEnum string

const (
	GETModifyInstancePlacementAffinityEnumDefault GetModifyInstancePlacementAffinityEnum = "default"
	GETModifyInstancePlacementAffinityEnumHost    GetModifyInstancePlacementAffinityEnum = "host"
)

type GetModifyInstancePlacementTenancyEnum string

const (
	GETModifyInstancePlacementTenancyEnumDedicated GetModifyInstancePlacementTenancyEnum = "dedicated"
	GETModifyInstancePlacementTenancyEnumHost      GetModifyInstancePlacementTenancyEnum = "host"
)

type GetModifyInstancePlacementVersionEnum string

const (
	GETModifyInstancePlacementVersionEnumTwoThousandAndSixteen1115 GetModifyInstancePlacementVersionEnum = "2016-11-15"
)

type GetModifyInstancePlacementQueryParams struct {
	Action               GetModifyInstancePlacementActionEnum    `queryParam:"style=form,explode=true,name=Action"`
	Affinity             *GetModifyInstancePlacementAffinityEnum `queryParam:"style=form,explode=true,name=Affinity"`
	GroupName            *string                                 `queryParam:"style=form,explode=true,name=GroupName"`
	HostID               *string                                 `queryParam:"style=form,explode=true,name=HostId"`
	HostResourceGroupArn *string                                 `queryParam:"style=form,explode=true,name=HostResourceGroupArn"`
	InstanceID           string                                  `queryParam:"style=form,explode=true,name=InstanceId"`
	PartitionNumber      *int64                                  `queryParam:"style=form,explode=true,name=PartitionNumber"`
	Tenancy              *GetModifyInstancePlacementTenancyEnum  `queryParam:"style=form,explode=true,name=Tenancy"`
	Version              GetModifyInstancePlacementVersionEnum   `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyInstancePlacementHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyInstancePlacementRequest struct {
	QueryParams GetModifyInstancePlacementQueryParams
	Headers     GetModifyInstancePlacementHeaders
}

type GetModifyInstancePlacementResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
