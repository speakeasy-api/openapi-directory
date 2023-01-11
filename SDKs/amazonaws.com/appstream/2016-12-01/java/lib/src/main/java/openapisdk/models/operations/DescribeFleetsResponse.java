package openapisdk.models.operations;



public class DescribeFleetsResponse {
    public String contentType;
    public DescribeFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetsResult describeFleetsResult;
    public DescribeFleetsResponse withDescribeFleetsResult(openapisdk.models.shared.DescribeFleetsResult describeFleetsResult) {
        this.describeFleetsResult = describeFleetsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFleetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}