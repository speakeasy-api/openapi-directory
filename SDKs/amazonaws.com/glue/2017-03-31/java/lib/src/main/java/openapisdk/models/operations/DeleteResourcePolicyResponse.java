package openapisdk.models.operations;



public class DeleteResourcePolicyResponse {
    public Object conditionCheckFailureException;
    public DeleteResourcePolicyResponse withConditionCheckFailureException(Object conditionCheckFailureException) {
        this.conditionCheckFailureException = conditionCheckFailureException;
        return this;
    }
    public String contentType;
    public DeleteResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteResourcePolicyResponse;
    public DeleteResourcePolicyResponse withDeleteResourcePolicyResponse(java.util.Map<String, Object> deleteResourcePolicyResponse) {
        this.deleteResourcePolicyResponse = deleteResourcePolicyResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteResourcePolicyResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeleteResourcePolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteResourcePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteResourcePolicyResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}