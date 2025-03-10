// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AggregationConstraint - Constraint on query output removing output rows that do not meet a minimum number of distinct values of a specified column.
type AggregationConstraint struct {
	ColumnName string              `json:"columnName"`
	Minimum    int64               `json:"minimum"`
	Type       AggregationTypeEnum `json:"type"`
}
