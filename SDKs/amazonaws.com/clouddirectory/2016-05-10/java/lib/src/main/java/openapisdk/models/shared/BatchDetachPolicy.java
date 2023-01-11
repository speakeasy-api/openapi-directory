package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchDetachPolicy
 * Detaches the specified policy from the specified directory inside a <a>BatchWrite</a> operation. For more information, see <a>DetachPolicy</a> and <a>BatchWriteRequest$Operations</a>.
**/
public class BatchDetachPolicy {
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchDetachPolicy withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("PolicyReference")
    public ObjectReference policyReference;
    public BatchDetachPolicy withPolicyReference(ObjectReference policyReference) {
        this.policyReference = policyReference;
        return this;
    }
}