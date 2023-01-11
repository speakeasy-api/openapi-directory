package openapisdk.models.operations;



public class GetEvidenceFoldersByAssessmentResponse {
    public Object accessDeniedException;
    public GetEvidenceFoldersByAssessmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEvidenceFoldersByAssessmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEvidenceFoldersByAssessmentResponse getEvidenceFoldersByAssessmentResponse;
    public GetEvidenceFoldersByAssessmentResponse withGetEvidenceFoldersByAssessmentResponse(openapisdk.models.shared.GetEvidenceFoldersByAssessmentResponse getEvidenceFoldersByAssessmentResponse) {
        this.getEvidenceFoldersByAssessmentResponse = getEvidenceFoldersByAssessmentResponse;
        return this;
    }
    public Object internalServerException;
    public GetEvidenceFoldersByAssessmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEvidenceFoldersByAssessmentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEvidenceFoldersByAssessmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetEvidenceFoldersByAssessmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}