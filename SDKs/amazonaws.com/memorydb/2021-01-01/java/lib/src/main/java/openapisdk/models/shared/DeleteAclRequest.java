package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAclRequest {
    @JsonProperty("ACLName")
    public String aclName;
    public DeleteAclRequest withAclName(String aclName) {
        this.aclName = aclName;
        return this;
    }
}