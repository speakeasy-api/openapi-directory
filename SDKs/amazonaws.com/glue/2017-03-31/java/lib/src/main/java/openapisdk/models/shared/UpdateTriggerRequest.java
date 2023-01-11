package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTriggerRequest {
    @JsonProperty("Name")
    public String name;
    public UpdateTriggerRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("TriggerUpdate")
    public TriggerUpdate triggerUpdate;
    public UpdateTriggerRequest withTriggerUpdate(TriggerUpdate triggerUpdate) {
        this.triggerUpdate = triggerUpdate;
        return this;
    }
}