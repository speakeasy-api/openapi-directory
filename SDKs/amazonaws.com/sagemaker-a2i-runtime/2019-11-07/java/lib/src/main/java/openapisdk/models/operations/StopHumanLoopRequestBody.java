package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopHumanLoopRequestBody {
    @JsonProperty("HumanLoopName")
    public String humanLoopName;
    public StopHumanLoopRequestBody withHumanLoopName(String humanLoopName) {
        this.humanLoopName = humanLoopName;
        return this;
    }
}