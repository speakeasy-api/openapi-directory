package shared

type DescribeAcLsResponse struct {
	ACLs      []ACL   `json:"ACLs,omitempty"`
	NextToken *string `json:"NextToken,omitempty"`
}
