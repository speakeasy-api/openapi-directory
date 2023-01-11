package openapisdk.models.operations;



public class CreateAssessmentFrameworkResponse {
    public Object accessDeniedException;
    public CreateAssessmentFrameworkResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateAssessmentFrameworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAssessmentFrameworkResponse createAssessmentFrameworkResponse;
    public CreateAssessmentFrameworkResponse withCreateAssessmentFrameworkResponse(openapisdk.models.shared.CreateAssessmentFrameworkResponse createAssessmentFrameworkResponse) {
        this.createAssessmentFrameworkResponse = createAssessmentFrameworkResponse;
        return this;
    }
    public Object internalServerException;
    public CreateAssessmentFrameworkResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAssessmentFrameworkResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAssessmentFrameworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateAssessmentFrameworkResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}