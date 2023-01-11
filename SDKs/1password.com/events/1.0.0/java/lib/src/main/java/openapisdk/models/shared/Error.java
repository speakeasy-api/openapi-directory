package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Error {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public ErrorError error;
    public Error withError(ErrorError error) {
        this.error = error;
        return this;
    }
}