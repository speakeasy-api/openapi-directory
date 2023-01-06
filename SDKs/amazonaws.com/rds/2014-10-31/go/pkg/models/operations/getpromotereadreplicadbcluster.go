package operations

type GetPromoteReadReplicaDbClusterActionEnum string

const (
	GETPromoteReadReplicaDBClusterActionEnumPromoteReadReplicaDbCluster GetPromoteReadReplicaDbClusterActionEnum = "PromoteReadReplicaDBCluster"
)

type GetPromoteReadReplicaDbClusterVersionEnum string

const (
	GETPromoteReadReplicaDBClusterVersionEnumTwoThousandAndFourteen1031 GetPromoteReadReplicaDbClusterVersionEnum = "2014-10-31"
)

type GetPromoteReadReplicaDbClusterQueryParams struct {
	Action              GetPromoteReadReplicaDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DBClusterIdentifier string                                    `queryParam:"style=form,explode=true,name=DBClusterIdentifier"`
	Version             GetPromoteReadReplicaDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPromoteReadReplicaDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPromoteReadReplicaDbClusterRequest struct {
	QueryParams GetPromoteReadReplicaDbClusterQueryParams
	Headers     GetPromoteReadReplicaDbClusterHeaders
}

type GetPromoteReadReplicaDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
