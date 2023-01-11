package openapisdk.models.operations;



public class GetStoreTrackedExternalOrdersResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreTrackedExternalOrdersResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreTrackedExternalOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreTrackedExternalOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrackedExternalOrders trackedExternalOrders;
    public GetStoreTrackedExternalOrdersResponse withTrackedExternalOrders(openapisdk.models.shared.TrackedExternalOrders trackedExternalOrders) {
        this.trackedExternalOrders = trackedExternalOrders;
        return this;
    }
}