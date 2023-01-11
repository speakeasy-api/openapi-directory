package openapisdk.models.operations;



public class GetEvidenceFolderResponse {
    public Object accessDeniedException;
    public GetEvidenceFolderResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEvidenceFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEvidenceFolderResponse getEvidenceFolderResponse;
    public GetEvidenceFolderResponse withGetEvidenceFolderResponse(openapisdk.models.shared.GetEvidenceFolderResponse getEvidenceFolderResponse) {
        this.getEvidenceFolderResponse = getEvidenceFolderResponse;
        return this;
    }
    public Object internalServerException;
    public GetEvidenceFolderResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEvidenceFolderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEvidenceFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetEvidenceFolderResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}