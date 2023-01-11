package openapisdk.models.shared;



/**
 * ListUsersResponse
 * Contains the response to a successful <a>ListUsers</a> request. 
**/
public class ListUsersResponse {
    public Boolean isTruncated;
    public ListUsersResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListUsersResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public User[] users;
    public ListUsersResponse withUsers(User[] users) {
        this.users = users;
        return this;
    }
}