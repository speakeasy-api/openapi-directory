package openapisdk.models.operations;



public class GetEvidenceByEvidenceFolderResponse {
    public Object accessDeniedException;
    public GetEvidenceByEvidenceFolderResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEvidenceByEvidenceFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEvidenceByEvidenceFolderResponse getEvidenceByEvidenceFolderResponse;
    public GetEvidenceByEvidenceFolderResponse withGetEvidenceByEvidenceFolderResponse(openapisdk.models.shared.GetEvidenceByEvidenceFolderResponse getEvidenceByEvidenceFolderResponse) {
        this.getEvidenceByEvidenceFolderResponse = getEvidenceByEvidenceFolderResponse;
        return this;
    }
    public Object internalServerException;
    public GetEvidenceByEvidenceFolderResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEvidenceByEvidenceFolderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEvidenceByEvidenceFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetEvidenceByEvidenceFolderResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}