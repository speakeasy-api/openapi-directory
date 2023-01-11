package openapisdk.models.operations;



public class CreateBillingGroupResponse {
    public String contentType;
    public CreateBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBillingGroupResponse createBillingGroupResponse;
    public CreateBillingGroupResponse withCreateBillingGroupResponse(openapisdk.models.shared.CreateBillingGroupResponse createBillingGroupResponse) {
        this.createBillingGroupResponse = createBillingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateBillingGroupResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}