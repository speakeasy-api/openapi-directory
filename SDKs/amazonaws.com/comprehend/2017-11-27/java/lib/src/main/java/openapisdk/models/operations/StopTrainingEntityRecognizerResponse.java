package openapisdk.models.operations;



public class StopTrainingEntityRecognizerResponse {
    public String contentType;
    public StopTrainingEntityRecognizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopTrainingEntityRecognizerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopTrainingEntityRecognizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopTrainingEntityRecognizerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopTrainingEntityRecognizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopTrainingEntityRecognizerResponse;
    public StopTrainingEntityRecognizerResponse withStopTrainingEntityRecognizerResponse(java.util.Map<String, Object> stopTrainingEntityRecognizerResponse) {
        this.stopTrainingEntityRecognizerResponse = stopTrainingEntityRecognizerResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public StopTrainingEntityRecognizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}