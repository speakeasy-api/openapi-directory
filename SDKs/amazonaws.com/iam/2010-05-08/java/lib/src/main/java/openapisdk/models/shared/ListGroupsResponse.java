package openapisdk.models.shared;



/**
 * ListGroupsResponse
 * Contains the response to a successful <a>ListGroups</a> request. 
**/
public class ListGroupsResponse {
    public Group[] groups;
    public ListGroupsResponse withGroups(Group[] groups) {
        this.groups = groups;
        return this;
    }
    public Boolean isTruncated;
    public ListGroupsResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListGroupsResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}