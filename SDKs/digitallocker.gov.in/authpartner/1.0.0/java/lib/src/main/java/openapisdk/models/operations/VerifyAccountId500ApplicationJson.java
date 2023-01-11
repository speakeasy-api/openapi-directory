package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyAccountId500ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Object error;
    public VerifyAccountId500ApplicationJson withError(Object error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_description")
    public Object errorDescription;
    public VerifyAccountId500ApplicationJson withErrorDescription(Object errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}