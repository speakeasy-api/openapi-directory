package openapisdk.models.operations;



public class GetInsightSelectorsResponse {
    public String contentType;
    public GetInsightSelectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInsightSelectorsResponse getInsightSelectorsResponse;
    public GetInsightSelectorsResponse withGetInsightSelectorsResponse(openapisdk.models.shared.GetInsightSelectorsResponse getInsightSelectorsResponse) {
        this.getInsightSelectorsResponse = getInsightSelectorsResponse;
        return this;
    }
    public Object insightNotEnabledException;
    public GetInsightSelectorsResponse withInsightNotEnabledException(Object insightNotEnabledException) {
        this.insightNotEnabledException = insightNotEnabledException;
        return this;
    }
    public Object invalidTrailNameException;
    public GetInsightSelectorsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetInsightSelectorsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public GetInsightSelectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public GetInsightSelectorsResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public GetInsightSelectorsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}