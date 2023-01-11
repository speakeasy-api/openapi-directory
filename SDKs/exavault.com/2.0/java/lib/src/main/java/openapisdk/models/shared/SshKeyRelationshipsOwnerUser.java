package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SshKeyRelationshipsOwnerUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SshKeyRelationshipsOwnerUserData data;
    public SshKeyRelationshipsOwnerUser withData(SshKeyRelationshipsOwnerUserData data) {
        this.data = data;
        return this;
    }
}