package openapisdk.models.operations;



public class ListPlaybackKeyPairsResponse {
    public Object accessDeniedException;
    public ListPlaybackKeyPairsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPlaybackKeyPairsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListPlaybackKeyPairsResponse listPlaybackKeyPairsResponse;
    public ListPlaybackKeyPairsResponse withListPlaybackKeyPairsResponse(openapisdk.models.shared.ListPlaybackKeyPairsResponse listPlaybackKeyPairsResponse) {
        this.listPlaybackKeyPairsResponse = listPlaybackKeyPairsResponse;
        return this;
    }
    public Long statusCode;
    public ListPlaybackKeyPairsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPlaybackKeyPairsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}