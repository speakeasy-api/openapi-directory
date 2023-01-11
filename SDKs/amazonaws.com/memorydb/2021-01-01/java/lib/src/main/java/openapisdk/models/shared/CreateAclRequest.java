package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAclRequest {
    @JsonProperty("ACLName")
    public String aclName;
    public CreateAclRequest withAclName(String aclName) {
        this.aclName = aclName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateAclRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserNames")
    public String[] userNames;
    public CreateAclRequest withUserNames(String[] userNames) {
        this.userNames = userNames;
        return this;
    }
}