package openapisdk.models.operations;



public class GetCrawlerMetricsResponse {
    public String contentType;
    public GetCrawlerMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCrawlerMetricsResponse getCrawlerMetricsResponse;
    public GetCrawlerMetricsResponse withGetCrawlerMetricsResponse(openapisdk.models.shared.GetCrawlerMetricsResponse getCrawlerMetricsResponse) {
        this.getCrawlerMetricsResponse = getCrawlerMetricsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public GetCrawlerMetricsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetCrawlerMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}