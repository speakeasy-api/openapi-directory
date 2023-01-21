package shared

type NumericOperatorEnum string

const (
	NumericOperatorEnumEqual              NumericOperatorEnum = "EQUAL"
	NumericOperatorEnumGreaterThanOrEqual NumericOperatorEnum = "GREATER_THAN_OR_EQUAL"
	NumericOperatorEnumLessThanOrEqual    NumericOperatorEnum = "LESS_THAN_OR_EQUAL"
	NumericOperatorEnumGreaterThan        NumericOperatorEnum = "GREATER_THAN"
	NumericOperatorEnumLessThan           NumericOperatorEnum = "LESS_THAN"
	NumericOperatorEnumBetween            NumericOperatorEnum = "BETWEEN"
)
