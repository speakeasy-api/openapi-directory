package openapisdk.models.operations;



public class ListArtifactsResponse {
    public Object argumentException;
    public ListArtifactsResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public ListArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public ListArtifactsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListArtifactsResult listArtifactsResult;
    public ListArtifactsResponse withListArtifactsResult(openapisdk.models.shared.ListArtifactsResult listArtifactsResult) {
        this.listArtifactsResult = listArtifactsResult;
        return this;
    }
    public Object notFoundException;
    public ListArtifactsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public ListArtifactsResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public ListArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}