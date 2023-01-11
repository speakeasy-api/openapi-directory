package openapisdk.models.operations;



public class GetEvidenceResponse {
    public Object accessDeniedException;
    public GetEvidenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEvidenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEvidenceResponse getEvidenceResponse;
    public GetEvidenceResponse withGetEvidenceResponse(openapisdk.models.shared.GetEvidenceResponse getEvidenceResponse) {
        this.getEvidenceResponse = getEvidenceResponse;
        return this;
    }
    public Object internalServerException;
    public GetEvidenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEvidenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEvidenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetEvidenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}