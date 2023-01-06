package shared

type CompareOptionsEnum string

const (
	CompareOptionsEnumNone              CompareOptionsEnum = "None"
	CompareOptionsEnumIgnoreCase        CompareOptionsEnum = "IgnoreCase"
	CompareOptionsEnumIgnoreNonSpace    CompareOptionsEnum = "IgnoreNonSpace"
	CompareOptionsEnumIgnoreSymbols     CompareOptionsEnum = "IgnoreSymbols"
	CompareOptionsEnumOrdinalIgnoreCase CompareOptionsEnum = "OrdinalIgnoreCase"
	CompareOptionsEnumStringSort        CompareOptionsEnum = "StringSort"
	CompareOptionsEnumOrdinal           CompareOptionsEnum = "Ordinal"
)
