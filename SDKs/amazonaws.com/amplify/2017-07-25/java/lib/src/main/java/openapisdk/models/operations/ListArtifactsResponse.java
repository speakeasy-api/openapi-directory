package openapisdk.models.operations;



public class ListArtifactsResponse {
    public Object badRequestException;
    public ListArtifactsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListArtifactsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
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
    public Long statusCode;
    public ListArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListArtifactsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}