package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomDataIdentifierResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDataIdentifierId")
    public String customDataIdentifierId;
    public CreateCustomDataIdentifierResponse withCustomDataIdentifierId(String customDataIdentifierId) {
        this.customDataIdentifierId = customDataIdentifierId;
        return this;
    }
}