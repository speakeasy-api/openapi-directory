package shared

type OrgEnum string

const (
	OrgEnumAssigned   OrgEnum = "assigned"
	OrgEnumCreated    OrgEnum = "created"
	OrgEnumMentioned  OrgEnum = "mentioned"
	OrgEnumSubscribed OrgEnum = "subscribed"
	OrgEnumRepos      OrgEnum = "repos"
	OrgEnumAll        OrgEnum = "all"
)
