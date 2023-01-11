package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAclRequest {
    @JsonProperty("ACLName")
    public String aclName;
    public UpdateAclRequest withAclName(String aclName) {
        this.aclName = aclName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserNamesToAdd")
    public String[] userNamesToAdd;
    public UpdateAclRequest withUserNamesToAdd(String[] userNamesToAdd) {
        this.userNamesToAdd = userNamesToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserNamesToRemove")
    public String[] userNamesToRemove;
    public UpdateAclRequest withUserNamesToRemove(String[] userNamesToRemove) {
        this.userNamesToRemove = userNamesToRemove;
        return this;
    }
}