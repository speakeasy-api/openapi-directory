package openapisdk.models.operations;



public class AnalyticsStoreIndexResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AnalyticsStoreIndexResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AnalyticsStoreIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsStoreIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AnalyticsStoreIndex analyticsStoreIndex;
    public AnalyticsStoreIndexResponse withAnalyticsStoreIndex(openapisdk.models.shared.AnalyticsStoreIndex analyticsStoreIndex) {
        this.analyticsStoreIndex = analyticsStoreIndex;
        return this;
    }
}