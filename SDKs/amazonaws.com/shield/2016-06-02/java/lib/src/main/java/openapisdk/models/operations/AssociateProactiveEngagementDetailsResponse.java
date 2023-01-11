package openapisdk.models.operations;



public class AssociateProactiveEngagementDetailsResponse {
    public java.util.Map<String, Object> associateProactiveEngagementDetailsResponse;
    public AssociateProactiveEngagementDetailsResponse withAssociateProactiveEngagementDetailsResponse(java.util.Map<String, Object> associateProactiveEngagementDetailsResponse) {
        this.associateProactiveEngagementDetailsResponse = associateProactiveEngagementDetailsResponse;
        return this;
    }
    public String contentType;
    public AssociateProactiveEngagementDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AssociateProactiveEngagementDetailsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public AssociateProactiveEngagementDetailsResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateProactiveEngagementDetailsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public AssociateProactiveEngagementDetailsResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateProactiveEngagementDetailsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateProactiveEngagementDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}