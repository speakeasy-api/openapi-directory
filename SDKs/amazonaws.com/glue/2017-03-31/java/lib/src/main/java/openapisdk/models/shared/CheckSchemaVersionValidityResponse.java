package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CheckSchemaVersionValidityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public String error;
    public CheckSchemaVersionValidityResponse withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Valid")
    public Boolean valid;
    public CheckSchemaVersionValidityResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}