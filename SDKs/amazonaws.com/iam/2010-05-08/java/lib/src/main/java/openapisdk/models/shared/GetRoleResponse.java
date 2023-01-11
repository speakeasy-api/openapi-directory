package openapisdk.models.shared;



/**
 * GetRoleResponse
 * Contains the response to a successful <a>GetRole</a> request. 
**/
public class GetRoleResponse {
    public Role role;
    public GetRoleResponse withRole(Role role) {
        this.role = role;
        return this;
    }
}