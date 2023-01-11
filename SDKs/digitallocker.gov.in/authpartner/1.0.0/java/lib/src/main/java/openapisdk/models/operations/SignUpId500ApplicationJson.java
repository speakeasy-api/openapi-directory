package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignUpId500ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Object error;
    public SignUpId500ApplicationJson withError(Object error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public Object errorDescription;
    public SignUpId500ApplicationJson withErrorDescription(Object errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}