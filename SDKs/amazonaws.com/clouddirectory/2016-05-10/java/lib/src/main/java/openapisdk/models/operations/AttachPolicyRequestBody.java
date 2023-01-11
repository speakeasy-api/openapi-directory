package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachPolicyRequestBody {
    @JsonProperty("ObjectReference")
    public AttachPolicyRequestBodyObjectReference objectReference;
    public AttachPolicyRequestBody withObjectReference(AttachPolicyRequestBodyObjectReference objectReference) {
        this.objectReference = objectReference;
        return this;
    }
    @JsonProperty("PolicyReference")
    public AttachPolicyRequestBodyPolicyReference policyReference;
    public AttachPolicyRequestBody withPolicyReference(AttachPolicyRequestBodyPolicyReference policyReference) {
        this.policyReference = policyReference;
        return this;
    }
}