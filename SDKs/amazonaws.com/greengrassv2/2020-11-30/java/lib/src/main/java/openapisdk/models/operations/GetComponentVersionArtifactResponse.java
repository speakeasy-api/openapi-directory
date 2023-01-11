package openapisdk.models.operations;



public class GetComponentVersionArtifactResponse {
    public Object accessDeniedException;
    public GetComponentVersionArtifactResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetComponentVersionArtifactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComponentVersionArtifactResponse getComponentVersionArtifactResponse;
    public GetComponentVersionArtifactResponse withGetComponentVersionArtifactResponse(openapisdk.models.shared.GetComponentVersionArtifactResponse getComponentVersionArtifactResponse) {
        this.getComponentVersionArtifactResponse = getComponentVersionArtifactResponse;
        return this;
    }
    public Object internalServerException;
    public GetComponentVersionArtifactResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetComponentVersionArtifactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetComponentVersionArtifactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetComponentVersionArtifactResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetComponentVersionArtifactResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}