package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchReadOperationResponse
 * Represents the output of a <code>BatchRead</code> response operation.
**/
public class BatchReadOperationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExceptionResponse")
    public BatchReadException exceptionResponse;
    public BatchReadOperationResponse withExceptionResponse(BatchReadException exceptionResponse) {
        this.exceptionResponse = exceptionResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuccessfulResponse")
    public BatchReadSuccessfulResponse successfulResponse;
    public BatchReadOperationResponse withSuccessfulResponse(BatchReadSuccessfulResponse successfulResponse) {
        this.successfulResponse = successfulResponse;
        return this;
    }
}