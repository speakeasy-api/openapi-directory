package openapisdk.models.operations;



public class GetReisezentrenLocLatLonDistResponse {
    public String contentType;
    public GetReisezentrenLocLatLonDistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReisezentrenLocLatLonDistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TravelCenter travelCenter;
    public GetReisezentrenLocLatLonDistResponse withTravelCenter(openapisdk.models.shared.TravelCenter travelCenter) {
        this.travelCenter = travelCenter;
        return this;
    }
}