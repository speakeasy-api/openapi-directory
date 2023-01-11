package openapisdk.models.operations;



public class CreateAssessmentTemplateResponse {
    public Object accessDeniedException;
    public CreateAssessmentTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateAssessmentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAssessmentTemplateResponse createAssessmentTemplateResponse;
    public CreateAssessmentTemplateResponse withCreateAssessmentTemplateResponse(openapisdk.models.shared.CreateAssessmentTemplateResponse createAssessmentTemplateResponse) {
        this.createAssessmentTemplateResponse = createAssessmentTemplateResponse;
        return this;
    }
    public Object internalException;
    public CreateAssessmentTemplateResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public CreateAssessmentTemplateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public CreateAssessmentTemplateResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object noSuchEntityException;
    public CreateAssessmentTemplateResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public CreateAssessmentTemplateResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateAssessmentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}