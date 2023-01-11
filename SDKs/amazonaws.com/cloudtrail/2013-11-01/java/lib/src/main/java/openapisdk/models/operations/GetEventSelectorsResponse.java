package openapisdk.models.operations;



public class GetEventSelectorsResponse {
    public String contentType;
    public GetEventSelectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEventSelectorsResponse getEventSelectorsResponse;
    public GetEventSelectorsResponse withGetEventSelectorsResponse(openapisdk.models.shared.GetEventSelectorsResponse getEventSelectorsResponse) {
        this.getEventSelectorsResponse = getEventSelectorsResponse;
        return this;
    }
    public Object invalidTrailNameException;
    public GetEventSelectorsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetEventSelectorsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetEventSelectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public GetEventSelectorsResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public GetEventSelectorsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}