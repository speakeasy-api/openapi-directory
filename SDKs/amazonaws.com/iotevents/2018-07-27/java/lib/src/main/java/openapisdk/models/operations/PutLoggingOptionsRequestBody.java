package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutLoggingOptionsRequestBody {
    @JsonProperty("loggingOptions")
    public PutLoggingOptionsRequestBodyLoggingOptions loggingOptions;
    public PutLoggingOptionsRequestBody withLoggingOptions(PutLoggingOptionsRequestBodyLoggingOptions loggingOptions) {
        this.loggingOptions = loggingOptions;
        return this;
    }
}