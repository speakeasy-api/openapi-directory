package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponseTwo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public ResponseTwo withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public String errorDescription;
    public ResponseTwo withErrorDescription(String errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}