package openapisdk.models.operations;



public class AnalyticsIndexResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public AnalyticsIndexResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public AnalyticsIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AnalyticsIndex analyticsIndex;
    public AnalyticsIndexResponse withAnalyticsIndex(openapisdk.models.shared.AnalyticsIndex analyticsIndex) {
        this.analyticsIndex = analyticsIndex;
        return this;
    }
}