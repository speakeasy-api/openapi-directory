package openapisdk.models.operations;



public class GetEvidenceFoldersByAssessmentControlResponse {
    public Object accessDeniedException;
    public GetEvidenceFoldersByAssessmentControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEvidenceFoldersByAssessmentControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEvidenceFoldersByAssessmentControlResponse getEvidenceFoldersByAssessmentControlResponse;
    public GetEvidenceFoldersByAssessmentControlResponse withGetEvidenceFoldersByAssessmentControlResponse(openapisdk.models.shared.GetEvidenceFoldersByAssessmentControlResponse getEvidenceFoldersByAssessmentControlResponse) {
        this.getEvidenceFoldersByAssessmentControlResponse = getEvidenceFoldersByAssessmentControlResponse;
        return this;
    }
    public Object internalServerException;
    public GetEvidenceFoldersByAssessmentControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEvidenceFoldersByAssessmentControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEvidenceFoldersByAssessmentControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetEvidenceFoldersByAssessmentControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}