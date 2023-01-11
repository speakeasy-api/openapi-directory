package openapisdk.models.operations;



public class GetTriggerResponse {
    public String contentType;
    public GetTriggerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetTriggerResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetTriggerResponse getTriggerResponse;
    public GetTriggerResponse withGetTriggerResponse(openapisdk.models.shared.GetTriggerResponse getTriggerResponse) {
        this.getTriggerResponse = getTriggerResponse;
        return this;
    }
    public Object internalServiceException;
    public GetTriggerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetTriggerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetTriggerResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetTriggerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}