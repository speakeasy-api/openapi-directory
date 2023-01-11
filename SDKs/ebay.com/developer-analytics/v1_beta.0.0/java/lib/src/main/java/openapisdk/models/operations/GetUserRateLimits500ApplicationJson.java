package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserRateLimits500ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public openapisdk.models.shared.Error[] errors;
    public GetUserRateLimits500ApplicationJson withErrors(openapisdk.models.shared.Error[] errors) {
        this.errors = errors;
        return this;
    }
}