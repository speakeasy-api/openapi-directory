package operations

type GetModifyInstanceMetadataOptionsActionEnum string

const (
	GETModifyInstanceMetadataOptionsActionEnumModifyInstanceMetadataOptions GetModifyInstanceMetadataOptionsActionEnum = "ModifyInstanceMetadataOptions"
)

type GetModifyInstanceMetadataOptionsHTTPEndpointEnum string

const (
	GETModifyInstanceMetadataOptionsHTTPEndpointEnumDisabled GetModifyInstanceMetadataOptionsHTTPEndpointEnum = "disabled"
	GETModifyInstanceMetadataOptionsHTTPEndpointEnumEnabled  GetModifyInstanceMetadataOptionsHTTPEndpointEnum = "enabled"
)

type GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum string

const (
	GETModifyInstanceMetadataOptionsHTTPProtocolIpv6EnumDisabled GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum = "disabled"
	GETModifyInstanceMetadataOptionsHTTPProtocolIpv6EnumEnabled  GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum = "enabled"
)

type GetModifyInstanceMetadataOptionsHTTPTokensEnum string

const (
	GETModifyInstanceMetadataOptionsHTTPTokensEnumOptional GetModifyInstanceMetadataOptionsHTTPTokensEnum = "optional"
	GETModifyInstanceMetadataOptionsHTTPTokensEnumRequired GetModifyInstanceMetadataOptionsHTTPTokensEnum = "required"
)

type GetModifyInstanceMetadataOptionsVersionEnum string

const (
	GETModifyInstanceMetadataOptionsVersionEnumTwoThousandAndSixteen1115 GetModifyInstanceMetadataOptionsVersionEnum = "2016-11-15"
)

type GetModifyInstanceMetadataOptionsQueryParams struct {
	Action                  GetModifyInstanceMetadataOptionsActionEnum            `queryParam:"style=form,explode=true,name=Action"`
	DryRun                  *bool                                                 `queryParam:"style=form,explode=true,name=DryRun"`
	HTTPEndpoint            *GetModifyInstanceMetadataOptionsHTTPEndpointEnum     `queryParam:"style=form,explode=true,name=HttpEndpoint"`
	HTTPProtocolIpv6        *GetModifyInstanceMetadataOptionsHTTPProtocolIpv6Enum `queryParam:"style=form,explode=true,name=HttpProtocolIpv6"`
	HTTPPutResponseHopLimit *int64                                                `queryParam:"style=form,explode=true,name=HttpPutResponseHopLimit"`
	HTTPTokens              *GetModifyInstanceMetadataOptionsHTTPTokensEnum       `queryParam:"style=form,explode=true,name=HttpTokens"`
	InstanceID              string                                                `queryParam:"style=form,explode=true,name=InstanceId"`
	Version                 GetModifyInstanceMetadataOptionsVersionEnum           `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyInstanceMetadataOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyInstanceMetadataOptionsRequest struct {
	QueryParams GetModifyInstanceMetadataOptionsQueryParams
	Headers     GetModifyInstanceMetadataOptionsHeaders
}

type GetModifyInstanceMetadataOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
