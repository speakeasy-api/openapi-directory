package openapisdk.models.operations;



public class DeleteBillingGroupResponse {
    public String contentType;
    public DeleteBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteBillingGroupResponse;
    public DeleteBillingGroupResponse withDeleteBillingGroupResponse(java.util.Map<String, Object> deleteBillingGroupResponse) {
        this.deleteBillingGroupResponse = deleteBillingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object versionConflictException;
    public DeleteBillingGroupResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}