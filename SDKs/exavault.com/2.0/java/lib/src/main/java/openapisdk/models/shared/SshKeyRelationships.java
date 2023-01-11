package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SshKeyRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUser")
    public SshKeyRelationshipsOwnerUser ownerUser;
    public SshKeyRelationships withOwnerUser(SshKeyRelationshipsOwnerUser ownerUser) {
        this.ownerUser = ownerUser;
        return this;
    }
}