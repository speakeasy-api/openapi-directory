package openapisdk.models.operations;



public class NotifyApplicationStateResponse {
    public Object accessDeniedException;
    public NotifyApplicationStateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public NotifyApplicationStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dryRunOperation;
    public NotifyApplicationStateResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public NotifyApplicationStateResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public NotifyApplicationStateResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public NotifyApplicationStateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public java.util.Map<String, Object> notifyApplicationStateResult;
    public NotifyApplicationStateResponse withNotifyApplicationStateResult(java.util.Map<String, Object> notifyApplicationStateResult) {
        this.notifyApplicationStateResult = notifyApplicationStateResult;
        return this;
    }
    public Object policyErrorException;
    public NotifyApplicationStateResponse withPolicyErrorException(Object policyErrorException) {
        this.policyErrorException = policyErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public NotifyApplicationStateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public NotifyApplicationStateResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public NotifyApplicationStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public NotifyApplicationStateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public NotifyApplicationStateResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}