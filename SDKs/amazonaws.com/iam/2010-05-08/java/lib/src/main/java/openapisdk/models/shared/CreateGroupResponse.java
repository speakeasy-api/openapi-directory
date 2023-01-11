package openapisdk.models.shared;



/**
 * CreateGroupResponse
 * Contains the response to a successful <a>CreateGroup</a> request. 
**/
public class CreateGroupResponse {
    public Group group;
    public CreateGroupResponse withGroup(Group group) {
        this.group = group;
        return this;
    }
}