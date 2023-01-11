package openapisdk.models.operations;



public class RemoveThingFromBillingGroupResponse {
    public String contentType;
    public RemoveThingFromBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RemoveThingFromBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RemoveThingFromBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public java.util.Map<String, Object> removeThingFromBillingGroupResponse;
    public RemoveThingFromBillingGroupResponse withRemoveThingFromBillingGroupResponse(java.util.Map<String, Object> removeThingFromBillingGroupResponse) {
        this.removeThingFromBillingGroupResponse = removeThingFromBillingGroupResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public RemoveThingFromBillingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RemoveThingFromBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RemoveThingFromBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}