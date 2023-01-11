package openapisdk.models.operations;



public class ListTrailsResponse {
    public String contentType;
    public ListTrailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTrailsResponse listTrailsResponse;
    public ListTrailsResponse withListTrailsResponse(openapisdk.models.shared.ListTrailsResponse listTrailsResponse) {
        this.listTrailsResponse = listTrailsResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public ListTrailsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public ListTrailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ListTrailsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}