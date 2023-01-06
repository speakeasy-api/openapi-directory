package shared

type AmiTypesEnum string

const (
	AMITypesEnumAl2X8664    AmiTypesEnum = "AL2_x86_64"
	AMITypesEnumAl2X8664Gpu AmiTypesEnum = "AL2_x86_64_GPU"
	AMITypesEnumAl2Arm64    AmiTypesEnum = "AL2_ARM_64"
	AMITypesEnumCustom      AmiTypesEnum = "CUSTOM"
)
