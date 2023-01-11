package openapisdk.models.operations;



public class GenerateDataSetResponse {
    public String contentType;
    public GenerateDataSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateDataSetResult generateDataSetResult;
    public GenerateDataSetResponse withGenerateDataSetResult(openapisdk.models.shared.GenerateDataSetResult generateDataSetResult) {
        this.generateDataSetResult = generateDataSetResult;
        return this;
    }
    public Object marketplaceCommerceAnalyticsException;
    public GenerateDataSetResponse withMarketplaceCommerceAnalyticsException(Object marketplaceCommerceAnalyticsException) {
        this.marketplaceCommerceAnalyticsException = marketplaceCommerceAnalyticsException;
        return this;
    }
    public Long statusCode;
    public GenerateDataSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}