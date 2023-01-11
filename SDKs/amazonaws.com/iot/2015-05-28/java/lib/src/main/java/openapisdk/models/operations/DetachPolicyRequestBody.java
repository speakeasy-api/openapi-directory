package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetachPolicyRequestBody {
    @JsonProperty("target")
    public String target;
    public DetachPolicyRequestBody withTarget(String target) {
        this.target = target;
        return this;
    }
}