package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Response15 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public Response15 withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public String errorDescription;
    public Response15 withErrorDescription(String errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}