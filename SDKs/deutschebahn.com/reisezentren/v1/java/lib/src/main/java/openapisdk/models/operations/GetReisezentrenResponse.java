package openapisdk.models.operations;



public class GetReisezentrenResponse {
    public String contentType;
    public GetReisezentrenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetReisezentrenResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetReisezentrenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TravelCenter[] travelCenterList;
    public GetReisezentrenResponse withTravelCenterList(openapisdk.models.shared.TravelCenter[] travelCenterList) {
        this.travelCenterList = travelCenterList;
        return this;
    }
}