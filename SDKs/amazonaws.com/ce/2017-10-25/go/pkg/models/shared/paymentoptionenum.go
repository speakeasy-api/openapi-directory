package shared

type PaymentOptionEnum string

const (
	PaymentOptionEnumNoUpfront         PaymentOptionEnum = "NO_UPFRONT"
	PaymentOptionEnumPartialUpfront    PaymentOptionEnum = "PARTIAL_UPFRONT"
	PaymentOptionEnumAllUpfront        PaymentOptionEnum = "ALL_UPFRONT"
	PaymentOptionEnumLightUtilization  PaymentOptionEnum = "LIGHT_UTILIZATION"
	PaymentOptionEnumMediumUtilization PaymentOptionEnum = "MEDIUM_UTILIZATION"
	PaymentOptionEnumHeavyUtilization  PaymentOptionEnum = "HEAVY_UTILIZATION"
)
