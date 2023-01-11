package openapisdk.models.operations;



public class GetMibsResponse {
    public String contentType;
    public GetMibsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMibsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Triplet[] triplets;
    public GetMibsResponse withTriplets(openapisdk.models.shared.Triplet[] triplets) {
        this.triplets = triplets;
        return this;
    }
}