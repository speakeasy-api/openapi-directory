package openapisdk.models.operations;



public class StartRxNormInferenceJobResponse {
    public String contentType;
    public StartRxNormInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StartRxNormInferenceJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StartRxNormInferenceJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartRxNormInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartRxNormInferenceJobResponse startRxNormInferenceJobResponse;
    public StartRxNormInferenceJobResponse withStartRxNormInferenceJobResponse(openapisdk.models.shared.StartRxNormInferenceJobResponse startRxNormInferenceJobResponse) {
        this.startRxNormInferenceJobResponse = startRxNormInferenceJobResponse;
        return this;
    }
    public Long statusCode;
    public StartRxNormInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartRxNormInferenceJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}