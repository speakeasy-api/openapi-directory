package openapisdk.models.operations;



public class DeleteRetentionPolicyResponse {
    public String contentType;
    public DeleteRetentionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRetentionPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object operationAbortedException;
    public DeleteRetentionPolicyResponse withOperationAbortedException(Object operationAbortedException) {
        this.operationAbortedException = operationAbortedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRetentionPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteRetentionPolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteRetentionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}