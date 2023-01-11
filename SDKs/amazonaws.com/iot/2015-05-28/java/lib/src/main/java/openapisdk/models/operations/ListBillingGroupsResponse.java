package openapisdk.models.operations;



public class ListBillingGroupsResponse {
    public String contentType;
    public ListBillingGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListBillingGroupsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListBillingGroupsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListBillingGroupsResponse listBillingGroupsResponse;
    public ListBillingGroupsResponse withListBillingGroupsResponse(openapisdk.models.shared.ListBillingGroupsResponse listBillingGroupsResponse) {
        this.listBillingGroupsResponse = listBillingGroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListBillingGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListBillingGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBillingGroupsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}