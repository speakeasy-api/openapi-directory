package openapisdk.models.operations;



public class GetCrawlersResponse {
    public String contentType;
    public GetCrawlersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCrawlersResponse getCrawlersResponse;
    public GetCrawlersResponse withGetCrawlersResponse(openapisdk.models.shared.GetCrawlersResponse getCrawlersResponse) {
        this.getCrawlersResponse = getCrawlersResponse;
        return this;
    }
    public Object operationTimeoutException;
    public GetCrawlersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetCrawlersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}