package openapisdk.models.shared;



/**
 * ListGroupsForUserResponse
 * Contains the response to a successful <a>ListGroupsForUser</a> request. 
**/
public class ListGroupsForUserResponse {
    public Group[] groups;
    public ListGroupsForUserResponse withGroups(Group[] groups) {
        this.groups = groups;
        return this;
    }
    public Boolean isTruncated;
    public ListGroupsForUserResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListGroupsForUserResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}