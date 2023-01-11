package openapisdk.models.operations;



public class GetTrackResponse {
    public String contentType;
    public GetTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTrackTrackingResponse trackingResponse;
    public GetTrackResponse withTrackingResponse(GetTrackTrackingResponse trackingResponse) {
        this.trackingResponse = trackingResponse;
        return this;
    }
}