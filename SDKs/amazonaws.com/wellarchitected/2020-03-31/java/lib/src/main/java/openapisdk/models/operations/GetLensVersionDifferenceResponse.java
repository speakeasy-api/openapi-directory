package openapisdk.models.operations;



public class GetLensVersionDifferenceResponse {
    public Object accessDeniedException;
    public GetLensVersionDifferenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLensVersionDifferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLensVersionDifferenceOutput getLensVersionDifferenceOutput;
    public GetLensVersionDifferenceResponse withGetLensVersionDifferenceOutput(openapisdk.models.shared.GetLensVersionDifferenceOutput getLensVersionDifferenceOutput) {
        this.getLensVersionDifferenceOutput = getLensVersionDifferenceOutput;
        return this;
    }
    public Object internalServerException;
    public GetLensVersionDifferenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLensVersionDifferenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLensVersionDifferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLensVersionDifferenceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetLensVersionDifferenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}