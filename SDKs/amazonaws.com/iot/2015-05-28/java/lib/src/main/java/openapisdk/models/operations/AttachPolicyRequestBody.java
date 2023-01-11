package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AttachPolicyRequestBody {
    @JsonProperty("target")
    public String target;
    public AttachPolicyRequestBody withTarget(String target) {
        this.target = target;
        return this;
    }
}