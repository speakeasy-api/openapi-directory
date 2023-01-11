package openapisdk.models.operations;



public class DeleteAssessmentTemplateResponse {
    public Object accessDeniedException;
    public DeleteAssessmentTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object assessmentRunInProgressException;
    public DeleteAssessmentTemplateResponse withAssessmentRunInProgressException(Object assessmentRunInProgressException) {
        this.assessmentRunInProgressException = assessmentRunInProgressException;
        return this;
    }
    public String contentType;
    public DeleteAssessmentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeleteAssessmentTemplateResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DeleteAssessmentTemplateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public DeleteAssessmentTemplateResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public DeleteAssessmentTemplateResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteAssessmentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}