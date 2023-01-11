package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetTriggersRequest {
    @JsonProperty("TriggerNames")
    public String[] triggerNames;
    public BatchGetTriggersRequest withTriggerNames(String[] triggerNames) {
        this.triggerNames = triggerNames;
        return this;
    }
}