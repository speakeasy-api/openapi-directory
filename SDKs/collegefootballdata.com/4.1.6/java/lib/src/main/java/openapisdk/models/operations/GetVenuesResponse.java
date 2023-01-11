package openapisdk.models.operations;



public class GetVenuesResponse {
    public String contentType;
    public GetVenuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVenuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Venue[] venues;
    public GetVenuesResponse withVenues(openapisdk.models.shared.Venue[] venues) {
        this.venues = venues;
        return this;
    }
}