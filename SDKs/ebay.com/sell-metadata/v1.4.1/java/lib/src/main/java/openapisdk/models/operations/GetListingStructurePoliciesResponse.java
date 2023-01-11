package openapisdk.models.operations;



public class GetListingStructurePoliciesResponse {
    public String contentType;
    public GetListingStructurePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListingStructurePolicyResponse listingStructurePolicyResponse;
    public GetListingStructurePoliciesResponse withListingStructurePolicyResponse(openapisdk.models.shared.ListingStructurePolicyResponse listingStructurePolicyResponse) {
        this.listingStructurePolicyResponse = listingStructurePolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetListingStructurePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}