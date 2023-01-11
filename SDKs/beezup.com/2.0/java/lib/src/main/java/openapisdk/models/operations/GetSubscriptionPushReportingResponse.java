package openapisdk.models.operations;



public class GetSubscriptionPushReportingResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetSubscriptionPushReportingResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetSubscriptionPushReportingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSubscriptionPushReportingResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSubscriptionPushReportingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseMessage errorResponseMessage;
    public GetSubscriptionPushReportingResponse withErrorResponseMessage(openapisdk.models.shared.ErrorResponseMessage errorResponseMessage) {
        this.errorResponseMessage = errorResponseMessage;
        return this;
    }
    public openapisdk.models.shared.SubscriptionPushReporting[] subscriptionPushReportings;
    public GetSubscriptionPushReportingResponse withSubscriptionPushReportings(openapisdk.models.shared.SubscriptionPushReporting[] subscriptionPushReportings) {
        this.subscriptionPushReportings = subscriptionPushReportings;
        return this;
    }
}