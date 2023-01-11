package openapisdk.models.operations;



public class DeleteJobResponse {
    public String contentType;
    public DeleteJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteJobResponse deleteJobResponse;
    public DeleteJobResponse withDeleteJobResponse(openapisdk.models.shared.DeleteJobResponse deleteJobResponse) {
        this.deleteJobResponse = deleteJobResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteJobResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteJobResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}