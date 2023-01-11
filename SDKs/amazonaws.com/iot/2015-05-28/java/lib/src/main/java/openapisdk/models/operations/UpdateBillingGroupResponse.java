package openapisdk.models.operations;



public class UpdateBillingGroupResponse {
    public String contentType;
    public UpdateBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateBillingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateBillingGroupResponse updateBillingGroupResponse;
    public UpdateBillingGroupResponse withUpdateBillingGroupResponse(openapisdk.models.shared.UpdateBillingGroupResponse updateBillingGroupResponse) {
        this.updateBillingGroupResponse = updateBillingGroupResponse;
        return this;
    }
    public Object versionConflictException;
    public UpdateBillingGroupResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}