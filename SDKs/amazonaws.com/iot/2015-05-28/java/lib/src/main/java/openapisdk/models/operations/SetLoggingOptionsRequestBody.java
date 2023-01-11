package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetLoggingOptionsRequestBody {
    @JsonProperty("loggingOptionsPayload")
    public SetLoggingOptionsRequestBodyLoggingOptionsPayload loggingOptionsPayload;
    public SetLoggingOptionsRequestBody withLoggingOptionsPayload(SetLoggingOptionsRequestBodyLoggingOptionsPayload loggingOptionsPayload) {
        this.loggingOptionsPayload = loggingOptionsPayload;
        return this;
    }
}