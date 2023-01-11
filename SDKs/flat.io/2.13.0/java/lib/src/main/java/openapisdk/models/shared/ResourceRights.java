package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceRights
 * The rights of the current user on a score or collection
**/
public class ResourceRights {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclAdmin")
    public Boolean aclAdmin;
    public ResourceRights withAclAdmin(Boolean aclAdmin) {
        this.aclAdmin = aclAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclRead")
    public Boolean aclRead;
    public ResourceRights withAclRead(Boolean aclRead) {
        this.aclRead = aclRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclWrite")
    public Boolean aclWrite;
    public ResourceRights withAclWrite(Boolean aclWrite) {
        this.aclWrite = aclWrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCollaborator")
    public Boolean isCollaborator;
    public ResourceRights withIsCollaborator(Boolean isCollaborator) {
        this.isCollaborator = isCollaborator;
        return this;
    }
}