package openapisdk.models.operations;



public class GetPlaybackKeyPairResponse {
    public Object accessDeniedException;
    public GetPlaybackKeyPairResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetPlaybackKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPlaybackKeyPairResponse getPlaybackKeyPairResponse;
    public GetPlaybackKeyPairResponse withGetPlaybackKeyPairResponse(openapisdk.models.shared.GetPlaybackKeyPairResponse getPlaybackKeyPairResponse) {
        this.getPlaybackKeyPairResponse = getPlaybackKeyPairResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPlaybackKeyPairResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPlaybackKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetPlaybackKeyPairResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}