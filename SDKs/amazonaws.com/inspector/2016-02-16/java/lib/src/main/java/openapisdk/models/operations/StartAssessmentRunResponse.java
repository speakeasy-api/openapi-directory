package openapisdk.models.operations;



public class StartAssessmentRunResponse {
    public Object accessDeniedException;
    public StartAssessmentRunResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object agentsAlreadyRunningAssessmentException;
    public StartAssessmentRunResponse withAgentsAlreadyRunningAssessmentException(Object agentsAlreadyRunningAssessmentException) {
        this.agentsAlreadyRunningAssessmentException = agentsAlreadyRunningAssessmentException;
        return this;
    }
    public String contentType;
    public StartAssessmentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public StartAssessmentRunResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidCrossAccountRoleException;
    public StartAssessmentRunResponse withInvalidCrossAccountRoleException(Object invalidCrossAccountRoleException) {
        this.invalidCrossAccountRoleException = invalidCrossAccountRoleException;
        return this;
    }
    public Object invalidInputException;
    public StartAssessmentRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public StartAssessmentRunResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object noSuchEntityException;
    public StartAssessmentRunResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public StartAssessmentRunResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartAssessmentRunResponse startAssessmentRunResponse;
    public StartAssessmentRunResponse withStartAssessmentRunResponse(openapisdk.models.shared.StartAssessmentRunResponse startAssessmentRunResponse) {
        this.startAssessmentRunResponse = startAssessmentRunResponse;
        return this;
    }
    public Long statusCode;
    public StartAssessmentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}