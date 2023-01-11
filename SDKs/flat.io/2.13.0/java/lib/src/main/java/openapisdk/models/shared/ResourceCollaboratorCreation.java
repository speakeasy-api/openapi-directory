package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceCollaboratorCreation
 * Add a collaborator to a resource.
**/
public class ResourceCollaboratorCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclAdmin")
    public Boolean aclAdmin;
    public ResourceCollaboratorCreation withAclAdmin(Boolean aclAdmin) {
        this.aclAdmin = aclAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclRead")
    public Boolean aclRead;
    public ResourceCollaboratorCreation withAclRead(Boolean aclRead) {
        this.aclRead = aclRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclWrite")
    public Boolean aclWrite;
    public ResourceCollaboratorCreation withAclWrite(Boolean aclWrite) {
        this.aclWrite = aclWrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public String group;
    public ResourceCollaboratorCreation withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public ResourceCollaboratorCreation withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public ResourceCollaboratorCreation withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userToken")
    public String userToken;
    public ResourceCollaboratorCreation withUserToken(String userToken) {
        this.userToken = userToken;
        return this;
    }
}