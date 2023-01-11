package openapisdk.models.operations;



public class CreateAssessmentResponse {
    public Object accessDeniedException;
    public CreateAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAssessmentResponse createAssessmentResponse;
    public CreateAssessmentResponse withCreateAssessmentResponse(openapisdk.models.shared.CreateAssessmentResponse createAssessmentResponse) {
        this.createAssessmentResponse = createAssessmentResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}