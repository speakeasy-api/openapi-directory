package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachPolicyRequestBody {
    @JsonProperty("ObjectReference")
    public DetachPolicyRequestBodyObjectReference objectReference;
    public DetachPolicyRequestBody withObjectReference(DetachPolicyRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("PolicyReference")
    public DetachPolicyRequestBodyPolicyReference policyReference;
    public DetachPolicyRequestBody withPolicyReference(DetachPolicyRequestBodyPolicyReference policyReference) {
        this.policyReference = policyReference;
        return this;
    }
}