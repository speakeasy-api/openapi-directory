package openapisdk.models.operations;



public class PutResourcePolicyResponse {
    public Object conditionCheckFailureException;
    public PutResourcePolicyResponse withConditionCheckFailureException(Object conditionCheckFailureException) {
        this.conditionCheckFailureException = conditionCheckFailureException;
        return this;
    }
    public String contentType;
    public PutResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public PutResourcePolicyResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public PutResourcePolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public PutResourcePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public PutResourcePolicyResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public openapisdk.models.shared.PutResourcePolicyResponse putResourcePolicyResponse;
    public PutResourcePolicyResponse withPutResourcePolicyResponse(openapisdk.models.shared.PutResourcePolicyResponse putResourcePolicyResponse) {
        this.putResourcePolicyResponse = putResourcePolicyResponse;
        return this;
    }
    public Long statusCode;
    public PutResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}