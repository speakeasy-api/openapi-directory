package openapisdk.models.operations;



public class GetReisezentrenLocLatLonResponse {
    public String contentType;
    public GetReisezentrenLocLatLonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReisezentrenLocLatLonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TravelCenter travelCenter;
    public GetReisezentrenLocLatLonResponse withTravelCenter(openapisdk.models.shared.TravelCenter travelCenter) {
        this.travelCenter = travelCenter;
        return this;
    }
}