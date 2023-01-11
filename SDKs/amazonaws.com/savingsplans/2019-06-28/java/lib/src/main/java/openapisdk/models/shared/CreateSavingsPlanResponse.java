package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSavingsPlanResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingsPlanId")
    public String savingsPlanId;
    public CreateSavingsPlanResponse withSavingsPlanId(String savingsPlanId) {
        this.savingsPlanId = savingsPlanId;
        return this;
    }
}