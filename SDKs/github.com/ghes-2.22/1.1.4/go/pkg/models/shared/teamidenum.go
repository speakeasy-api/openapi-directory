package shared

type TeamIDEnum string

const (
	TeamIDEnumMember     TeamIDEnum = "member"
	TeamIDEnumMaintainer TeamIDEnum = "maintainer"
	TeamIDEnumAll        TeamIDEnum = "all"
)
