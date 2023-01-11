package openapisdk.models.shared;



/**
 * CreateRoleResponse
 * Contains the response to a successful <a>CreateRole</a> request. 
**/
public class CreateRoleResponse {
    public Role role;
    public CreateRoleResponse withRole(Role role) {
        this.role = role;
        return this;
    }
}