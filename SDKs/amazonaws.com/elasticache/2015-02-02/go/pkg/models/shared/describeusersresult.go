package shared

type DescribeUsersResult struct {
	Marker map[string]interface{}
	Users  []User
}
