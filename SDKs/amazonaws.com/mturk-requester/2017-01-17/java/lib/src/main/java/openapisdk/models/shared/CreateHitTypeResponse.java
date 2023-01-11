package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateHitTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HITTypeId")
    public String hitTypeId;
    public CreateHitTypeResponse withHitTypeId(String hitTypeId) {
        this.hitTypeId = hitTypeId;
        return this;
    }
}