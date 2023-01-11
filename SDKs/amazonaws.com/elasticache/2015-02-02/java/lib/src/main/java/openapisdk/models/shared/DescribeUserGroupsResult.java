package openapisdk.models.shared;



public class DescribeUserGroupsResult {
    public String marker;
    public DescribeUserGroupsResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public UserGroup[] userGroups;
    public DescribeUserGroupsResult withUserGroups(UserGroup[] userGroups) {
        this.userGroups = userGroups;
        return this;
    }
}