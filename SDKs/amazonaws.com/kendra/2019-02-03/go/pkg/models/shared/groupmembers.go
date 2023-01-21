package shared

// GroupMembers
// A list of users or sub groups that belong to a group. Users and groups are useful for filtering search results to different users based on their group's access to documents.
type GroupMembers struct {
	MemberGroups          []MemberGroup `json:"MemberGroups,omitempty"`
	MemberUsers           []MemberUser  `json:"MemberUsers,omitempty"`
	S3PathforGroupMembers *S3Path       `json:"S3PathforGroupMembers,omitempty"`
}
