package openapisdk.models.operations;



public class ListCrawlersResponse {
    public String contentType;
    public ListCrawlersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCrawlersResponse listCrawlersResponse;
    public ListCrawlersResponse withListCrawlersResponse(openapisdk.models.shared.ListCrawlersResponse listCrawlersResponse) {
        this.listCrawlersResponse = listCrawlersResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListCrawlersResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListCrawlersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}