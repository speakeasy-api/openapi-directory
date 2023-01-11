package openapisdk.models.operations;



public class SearchSystemInstancesResponse {
    public String contentType;
    public SearchSystemInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SearchSystemInstancesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SearchSystemInstancesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.SearchSystemInstancesResponse searchSystemInstancesResponse;
    public SearchSystemInstancesResponse withSearchSystemInstancesResponse(openapisdk.models.shared.SearchSystemInstancesResponse searchSystemInstancesResponse) {
        this.searchSystemInstancesResponse = searchSystemInstancesResponse;
        return this;
    }
    public Long statusCode;
    public SearchSystemInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchSystemInstancesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}