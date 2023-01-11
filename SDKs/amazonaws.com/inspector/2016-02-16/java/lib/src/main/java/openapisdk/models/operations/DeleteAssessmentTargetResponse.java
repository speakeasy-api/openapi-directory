package openapisdk.models.operations;



public class DeleteAssessmentTargetResponse {
    public Object accessDeniedException;
    public DeleteAssessmentTargetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object assessmentRunInProgressException;
    public DeleteAssessmentTargetResponse withAssessmentRunInProgressException(Object assessmentRunInProgressException) {
        this.assessmentRunInProgressException = assessmentRunInProgressException;
        return this;
    }
    public String contentType;
    public DeleteAssessmentTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeleteAssessmentTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DeleteAssessmentTargetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public DeleteAssessmentTargetResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public DeleteAssessmentTargetResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteAssessmentTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}