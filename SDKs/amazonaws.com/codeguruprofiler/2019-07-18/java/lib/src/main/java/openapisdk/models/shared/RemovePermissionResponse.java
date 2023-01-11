package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemovePermissionResponse
 * The structure representing the <code>removePermissionResponse</code>.
**/
public class RemovePermissionResponse {
    @JsonProperty("policy")
    public String policy;
    public RemovePermissionResponse withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public RemovePermissionResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}