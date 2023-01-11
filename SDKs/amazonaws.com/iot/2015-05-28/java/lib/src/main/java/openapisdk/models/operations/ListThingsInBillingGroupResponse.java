package openapisdk.models.operations;



public class ListThingsInBillingGroupResponse {
    public String contentType;
    public ListThingsInBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListThingsInBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListThingsInBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListThingsInBillingGroupResponse listThingsInBillingGroupResponse;
    public ListThingsInBillingGroupResponse withListThingsInBillingGroupResponse(openapisdk.models.shared.ListThingsInBillingGroupResponse listThingsInBillingGroupResponse) {
        this.listThingsInBillingGroupResponse = listThingsInBillingGroupResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListThingsInBillingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListThingsInBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListThingsInBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}