package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLatestBaseCurrency404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_type")
    public String errorType;
    public GetLatestBaseCurrency404ApplicationJson withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public GetLatestBaseCurrency404ApplicationJson withResult(String result) {
        this.result = result;
        return this;
    }
}