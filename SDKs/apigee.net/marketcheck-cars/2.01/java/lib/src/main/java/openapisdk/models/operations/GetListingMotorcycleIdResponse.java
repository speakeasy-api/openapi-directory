package openapisdk.models.operations;



public class GetListingMotorcycleIdResponse {
    public String contentType;
    public GetListingMotorcycleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetListingMotorcycleIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.MotorcycleListing motorcycleListing;
    public GetListingMotorcycleIdResponse withMotorcycleListing(openapisdk.models.shared.MotorcycleListing motorcycleListing) {
        this.motorcycleListing = motorcycleListing;
        return this;
    }
    public Long statusCode;
    public GetListingMotorcycleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}