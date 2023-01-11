package openapisdk.models.operations;



public class GetStoreTrackedOrdersResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreTrackedOrdersResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreTrackedOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreTrackedOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrackedOrders trackedOrders;
    public GetStoreTrackedOrdersResponse withTrackedOrders(openapisdk.models.shared.TrackedOrders trackedOrders) {
        this.trackedOrders = trackedOrders;
        return this;
    }
}