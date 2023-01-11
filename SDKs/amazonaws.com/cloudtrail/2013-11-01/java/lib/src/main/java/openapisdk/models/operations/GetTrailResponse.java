package openapisdk.models.operations;



public class GetTrailResponse {
    public String contentType;
    public GetTrailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTrailResponse getTrailResponse;
    public GetTrailResponse withGetTrailResponse(openapisdk.models.shared.GetTrailResponse getTrailResponse) {
        this.getTrailResponse = getTrailResponse;
        return this;
    }
    public Object invalidTrailNameException;
    public GetTrailResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetTrailResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetTrailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public GetTrailResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public GetTrailResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}