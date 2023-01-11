package openapisdk.models.operations;



public class GetQueryResultsResponse {
    public String contentType;
    public GetQueryResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetQueryResultsResponse getQueryResultsResponse;
    public GetQueryResultsResponse withGetQueryResultsResponse(openapisdk.models.shared.GetQueryResultsResponse getQueryResultsResponse) {
        this.getQueryResultsResponse = getQueryResultsResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetQueryResultsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetQueryResultsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetQueryResultsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetQueryResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}