package openapisdk.models.operations;



public class StopTrainingDocumentClassifierResponse {
    public String contentType;
    public StopTrainingDocumentClassifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public StopTrainingDocumentClassifierResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public StopTrainingDocumentClassifierResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopTrainingDocumentClassifierResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopTrainingDocumentClassifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopTrainingDocumentClassifierResponse;
    public StopTrainingDocumentClassifierResponse withStopTrainingDocumentClassifierResponse(java.util.Map<String, Object> stopTrainingDocumentClassifierResponse) {
        this.stopTrainingDocumentClassifierResponse = stopTrainingDocumentClassifierResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public StopTrainingDocumentClassifierResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}