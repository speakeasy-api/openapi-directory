package openapisdk.models.shared;



/**
 * GetGroupResponse
 * Contains the response to a successful <a>GetGroup</a> request. 
**/
public class GetGroupResponse {
    public Group group;
    public GetGroupResponse withGroup(Group group) {
        this.group = group;
        return this;
    }
    public Boolean isTruncated;
    public GetGroupResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public GetGroupResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public User[] users;
    public GetGroupResponse withUsers(User[] users) {
        this.users = users;
        return this;
    }
}