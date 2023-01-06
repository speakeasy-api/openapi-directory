package operations

type GetRestoreDbInstanceFromDbSnapshotActionEnum string

const (
	GETRestoreDBInstanceFromDBSnapshotActionEnumRestoreDbInstanceFromDbSnapshot GetRestoreDbInstanceFromDbSnapshotActionEnum = "RestoreDBInstanceFromDBSnapshot"
)

type GetRestoreDbInstanceFromDbSnapshotVersionEnum string

const (
	GETRestoreDBInstanceFromDBSnapshotVersionEnumTwoThousandAndThirteen0212 GetRestoreDbInstanceFromDbSnapshotVersionEnum = "2013-02-12"
)

type GetRestoreDbInstanceFromDbSnapshotQueryParams struct {
	Action                  GetRestoreDbInstanceFromDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoMinorVersionUpgrade *bool                                         `queryParam:"style=form,explode=true,name=AutoMinorVersionUpgrade"`
	AvailabilityZone        *string                                       `queryParam:"style=form,explode=true,name=AvailabilityZone"`
	DBInstanceClass         *string                                       `queryParam:"style=form,explode=true,name=DBInstanceClass"`
	DBInstanceIdentifier    string                                        `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	DBName                  *string                                       `queryParam:"style=form,explode=true,name=DBName"`
	DBSnapshotIdentifier    string                                        `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	DBSubnetGroupName       *string                                       `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
	Engine                  *string                                       `queryParam:"style=form,explode=true,name=Engine"`
	Iops                    *int64                                        `queryParam:"style=form,explode=true,name=Iops"`
	LicenseModel            *string                                       `queryParam:"style=form,explode=true,name=LicenseModel"`
	MultiAZ                 *bool                                         `queryParam:"style=form,explode=true,name=MultiAZ"`
	OptionGroupName         *string                                       `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Port                    *int64                                        `queryParam:"style=form,explode=true,name=Port"`
	PubliclyAccessible      *bool                                         `queryParam:"style=form,explode=true,name=PubliclyAccessible"`
	Version                 GetRestoreDbInstanceFromDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRestoreDbInstanceFromDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetRestoreDbInstanceFromDbSnapshotRequest struct {
	QueryParams GetRestoreDbInstanceFromDbSnapshotQueryParams
	Headers     GetRestoreDbInstanceFromDbSnapshotHeaders
}

type GetRestoreDbInstanceFromDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
