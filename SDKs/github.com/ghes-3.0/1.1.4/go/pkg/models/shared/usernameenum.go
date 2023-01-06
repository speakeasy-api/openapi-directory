package shared

type UsernameEnum string

const (
	UsernameEnumOrganization UsernameEnum = "organization"
	UsernameEnumRepository   UsernameEnum = "repository"
	UsernameEnumIssue        UsernameEnum = "issue"
	UsernameEnumPullRequest  UsernameEnum = "pull_request"
)
