package operations

type GetCopyDbSnapshotActionEnum string

const (
	GETCopyDBSnapshotActionEnumCopyDbSnapshot GetCopyDbSnapshotActionEnum = "CopyDBSnapshot"
)

type GetCopyDbSnapshotVersionEnum string

const (
	GETCopyDBSnapshotVersionEnumTwoThousandAndThirteen0212 GetCopyDbSnapshotVersionEnum = "2013-02-12"
)

type GetCopyDbSnapshotQueryParams struct {
	Action                     GetCopyDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SourceDBSnapshotIdentifier string                       `queryParam:"style=form,explode=true,name=SourceDBSnapshotIdentifier"`
	TargetDBSnapshotIdentifier string                       `queryParam:"style=form,explode=true,name=TargetDBSnapshotIdentifier"`
	Version                    GetCopyDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCopyDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCopyDbSnapshotRequest struct {
	QueryParams GetCopyDbSnapshotQueryParams
	Headers     GetCopyDbSnapshotHeaders
}

type GetCopyDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
