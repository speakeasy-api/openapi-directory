package openapisdk.models.operations;



public class CreateAssessmentTargetResponse {
    public Object accessDeniedException;
    public CreateAssessmentTargetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateAssessmentTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAssessmentTargetResponse createAssessmentTargetResponse;
    public CreateAssessmentTargetResponse withCreateAssessmentTargetResponse(openapisdk.models.shared.CreateAssessmentTargetResponse createAssessmentTargetResponse) {
        this.createAssessmentTargetResponse = createAssessmentTargetResponse;
        return this;
    }
    public Object internalException;
    public CreateAssessmentTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidCrossAccountRoleException;
    public CreateAssessmentTargetResponse withInvalidCrossAccountRoleException(Object invalidCrossAccountRoleException) {
        this.invalidCrossAccountRoleException = invalidCrossAccountRoleException;
        return this;
    }
    public Object invalidInputException;
    public CreateAssessmentTargetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateAssessmentTargetResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object noSuchEntityException;
    public CreateAssessmentTargetResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public CreateAssessmentTargetResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateAssessmentTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}