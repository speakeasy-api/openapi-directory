package openapisdk.models.shared;



public class DescribeUsersResult {
    public String marker;
    public DescribeUsersResult withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public User[] users;
    public DescribeUsersResult withUsers(User[] users) {
        this.users = users;
        return this;
    }
}