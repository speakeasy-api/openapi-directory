package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteQueuedSavingsPlanRequestBody {
    @JsonProperty("savingsPlanId")
    public String savingsPlanId;
    public DeleteQueuedSavingsPlanRequestBody withSavingsPlanId(String savingsPlanId) {
        this.savingsPlanId = savingsPlanId;
        return this;
    }
}