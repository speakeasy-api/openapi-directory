package openapisdk.models.operations;



public class GetStoreTrackingStatusResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreTrackingStatusResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreTrackingStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreTrackingStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StoreTrackingStatus storeTrackingStatus;
    public GetStoreTrackingStatusResponse withStoreTrackingStatus(openapisdk.models.shared.StoreTrackingStatus storeTrackingStatus) {
        this.storeTrackingStatus = storeTrackingStatus;
        return this;
    }
}