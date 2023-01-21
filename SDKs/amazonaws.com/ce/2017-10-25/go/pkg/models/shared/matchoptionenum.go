package shared

type MatchOptionEnum string

const (
	MatchOptionEnumEquals          MatchOptionEnum = "EQUALS"
	MatchOptionEnumAbsent          MatchOptionEnum = "ABSENT"
	MatchOptionEnumStartsWith      MatchOptionEnum = "STARTS_WITH"
	MatchOptionEnumEndsWith        MatchOptionEnum = "ENDS_WITH"
	MatchOptionEnumContains        MatchOptionEnum = "CONTAINS"
	MatchOptionEnumCaseSensitive   MatchOptionEnum = "CASE_SENSITIVE"
	MatchOptionEnumCaseInsensitive MatchOptionEnum = "CASE_INSENSITIVE"
)
