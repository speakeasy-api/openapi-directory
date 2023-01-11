package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutPermissionResponse
 * The structure representing the <code>putPermissionResponse</code>.
**/
public class PutPermissionResponse {
    @JsonProperty("policy")
    public String policy;
    public PutPermissionResponse withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public PutPermissionResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}