// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DescribeClusterSecurityGroupsMessage - <p/>
type DescribeClusterSecurityGroupsMessage struct {
	ClusterSecurityGroupName *string
	Marker                   *string
	MaxRecords               *int64
	TagKeys                  []string
	TagValues                []string
}
