// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type RestoreDBInstanceFromDBSnapshotMessage struct {
	AutoMinorVersionUpgrade *bool
	AvailabilityZone        *string
	DBInstanceClass         *string
	DBInstanceIdentifier    string
	DBName                  *string
	DBSnapshotIdentifier    string
	DBSubnetGroupName       *string
	Engine                  *string
	Iops                    *int64
	LicenseModel            *string
	MultiAZ                 *bool
	OptionGroupName         *string
	Port                    *int64
	PubliclyAccessible      *bool
}
