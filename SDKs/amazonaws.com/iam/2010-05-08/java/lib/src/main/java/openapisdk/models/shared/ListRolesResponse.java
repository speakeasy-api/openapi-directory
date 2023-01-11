package openapisdk.models.shared;



/**
 * ListRolesResponse
 * Contains the response to a successful <a>ListRoles</a> request. 
**/
public class ListRolesResponse {
    public Boolean isTruncated;
    public ListRolesResponse withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public String marker;
    public ListRolesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Role[] roles;
    public ListRolesResponse withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
}