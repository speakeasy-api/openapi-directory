package openapisdk.models.operations;



public class StopRxNormInferenceJobResponse {
    public String contentType;
    public StopRxNormInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopRxNormInferenceJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopRxNormInferenceJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopRxNormInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopRxNormInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopRxNormInferenceJobResponse stopRxNormInferenceJobResponse;
    public StopRxNormInferenceJobResponse withStopRxNormInferenceJobResponse(openapisdk.models.shared.StopRxNormInferenceJobResponse stopRxNormInferenceJobResponse) {
        this.stopRxNormInferenceJobResponse = stopRxNormInferenceJobResponse;
        return this;
    }
}