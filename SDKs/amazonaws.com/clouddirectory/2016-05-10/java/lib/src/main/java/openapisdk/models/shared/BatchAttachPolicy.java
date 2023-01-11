package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchAttachPolicy
 * Attaches a policy object to a regular object inside a <a>BatchRead</a> operation. For more information, see <a>AttachPolicy</a> and <a>BatchReadRequest$Operations</a>.
**/
public class BatchAttachPolicy {
    @JsonProperty("ObjectReference")
    public ObjectReference objectReference;
    public BatchAttachPolicy withObjectReference(ObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("PolicyReference")
    public ObjectReference policyReference;
    public BatchAttachPolicy withPolicyReference(ObjectReference policyReference) {
        this.policyReference = policyReference;
        return this;
    }
}