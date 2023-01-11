package openapisdk.models.operations;



public class GetArtifactUrlResponse {
    public Object badRequestException;
    public GetArtifactUrlResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetArtifactUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetArtifactUrlResult getArtifactUrlResult;
    public GetArtifactUrlResponse withGetArtifactUrlResult(openapisdk.models.shared.GetArtifactUrlResult getArtifactUrlResult) {
        this.getArtifactUrlResult = getArtifactUrlResult;
        return this;
    }
    public Object internalFailureException;
    public GetArtifactUrlResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetArtifactUrlResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetArtifactUrlResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetArtifactUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetArtifactUrlResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}