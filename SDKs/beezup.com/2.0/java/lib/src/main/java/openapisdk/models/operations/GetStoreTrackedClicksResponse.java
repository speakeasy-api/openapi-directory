package openapisdk.models.operations;



public class GetStoreTrackedClicksResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetStoreTrackedClicksResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetStoreTrackedClicksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStoreTrackedClicksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrackedClicks trackedClicks;
    public GetStoreTrackedClicksResponse withTrackedClicks(openapisdk.models.shared.TrackedClicks trackedClicks) {
        this.trackedClicks = trackedClicks;
        return this;
    }
}