package openapisdk.models.operations;



public class AddThingToBillingGroupResponse {
    public java.util.Map<String, Object> addThingToBillingGroupResponse;
    public AddThingToBillingGroupResponse withAddThingToBillingGroupResponse(java.util.Map<String, Object> addThingToBillingGroupResponse) {
        this.addThingToBillingGroupResponse = addThingToBillingGroupResponse;
        return this;
    }
    public String contentType;
    public AddThingToBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public AddThingToBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public AddThingToBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddThingToBillingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddThingToBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AddThingToBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}