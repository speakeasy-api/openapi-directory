package openapisdk.models.operations;



public class ListTestGridSessionArtifactsResponse {
    public Object argumentException;
    public ListTestGridSessionArtifactsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListTestGridSessionArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListTestGridSessionArtifactsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListTestGridSessionArtifactsResult listTestGridSessionArtifactsResult;
    public ListTestGridSessionArtifactsResponse withListTestGridSessionArtifactsResult(openapisdk.models.shared.ListTestGridSessionArtifactsResult listTestGridSessionArtifactsResult) {
        this.listTestGridSessionArtifactsResult = listTestGridSessionArtifactsResult;
        return this;
    }
    public Object notFoundException;
    public ListTestGridSessionArtifactsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListTestGridSessionArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}