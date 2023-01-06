package operations

type GetCreateDbSecurityGroupActionEnum string

const (
	GETCreateDBSecurityGroupActionEnumCreateDbSecurityGroup GetCreateDbSecurityGroupActionEnum = "CreateDBSecurityGroup"
)

type GetCreateDbSecurityGroupVersionEnum string

const (
	GETCreateDBSecurityGroupVersionEnumTwoThousandAndThirteen0110 GetCreateDbSecurityGroupVersionEnum = "2013-01-10"
)

type GetCreateDbSecurityGroupQueryParams struct {
	Action                     GetCreateDbSecurityGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBSecurityGroupDescription string                              `queryParam:"style=form,explode=true,name=DBSecurityGroupDescription"`
	DBSecurityGroupName        string                              `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
	Version                    GetCreateDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateDbSecurityGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateDbSecurityGroupRequest struct {
	QueryParams GetCreateDbSecurityGroupQueryParams
	Headers     GetCreateDbSecurityGroupHeaders
}

type GetCreateDbSecurityGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
