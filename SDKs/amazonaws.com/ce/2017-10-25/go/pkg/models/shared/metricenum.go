package shared

type MetricEnum string

const (
	MetricEnumBlendedCost           MetricEnum = "BLENDED_COST"
	MetricEnumUnblendedCost         MetricEnum = "UNBLENDED_COST"
	MetricEnumAmortizedCost         MetricEnum = "AMORTIZED_COST"
	MetricEnumNetUnblendedCost      MetricEnum = "NET_UNBLENDED_COST"
	MetricEnumNetAmortizedCost      MetricEnum = "NET_AMORTIZED_COST"
	MetricEnumUsageQuantity         MetricEnum = "USAGE_QUANTITY"
	MetricEnumNormalizedUsageAmount MetricEnum = "NORMALIZED_USAGE_AMOUNT"
)
