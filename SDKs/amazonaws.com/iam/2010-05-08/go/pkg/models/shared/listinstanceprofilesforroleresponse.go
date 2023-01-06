package shared

// ListInstanceProfilesForRoleResponse
// Contains the response to a successful <a>ListInstanceProfilesForRole</a> request.
type ListInstanceProfilesForRoleResponse struct {
	InstanceProfiles []InstanceProfile1
	IsTruncated      *bool
	Marker           *string
}
