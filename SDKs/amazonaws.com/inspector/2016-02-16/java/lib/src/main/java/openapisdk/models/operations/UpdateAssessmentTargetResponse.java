package openapisdk.models.operations;



public class UpdateAssessmentTargetResponse {
    public Object accessDeniedException;
    public UpdateAssessmentTargetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateAssessmentTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateAssessmentTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public UpdateAssessmentTargetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public UpdateAssessmentTargetResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public UpdateAssessmentTargetResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateAssessmentTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}