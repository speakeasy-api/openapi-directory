package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetTriggersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Triggers")
    public Trigger[] triggers;
    public BatchGetTriggersResponse withTriggers(Trigger[] triggers) {
        this.triggers = triggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TriggersNotFound")
    public String[] triggersNotFound;
    public BatchGetTriggersResponse withTriggersNotFound(String[] triggersNotFound) {
        this.triggersNotFound = triggersNotFound;
        return this;
    }
}