package shared

type LicenseCountingTypeEnum string

const (
	LicenseCountingTypeEnumVCPU     LicenseCountingTypeEnum = "vCPU"
	LicenseCountingTypeEnumInstance LicenseCountingTypeEnum = "Instance"
	LicenseCountingTypeEnumCore     LicenseCountingTypeEnum = "Core"
	LicenseCountingTypeEnumSocket   LicenseCountingTypeEnum = "Socket"
)
