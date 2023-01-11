package openapisdk.models.operations;



public class GetTrailStatusResponse {
    public String contentType;
    public GetTrailStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTrailStatusResponse getTrailStatusResponse;
    public GetTrailStatusResponse withGetTrailStatusResponse(openapisdk.models.shared.GetTrailStatusResponse getTrailStatusResponse) {
        this.getTrailStatusResponse = getTrailStatusResponse;
        return this;
    }
    public Object invalidTrailNameException;
    public GetTrailStatusResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetTrailStatusResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetTrailStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public GetTrailStatusResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public GetTrailStatusResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}