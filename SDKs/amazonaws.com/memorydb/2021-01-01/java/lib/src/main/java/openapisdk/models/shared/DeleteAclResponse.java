package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAclResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ACL")
    public Acl acl;
    public DeleteAclResponse withAcl(Acl acl) {
        this.acl = acl;
        return this;
    }
}