package openapisdk.models.operations;



public class CollectionListingsAllResponse {
    public String contentType;
    public CollectionListingsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetListingsResponse getListingsResponse;
    public CollectionListingsAllResponse withGetListingsResponse(openapisdk.models.shared.GetListingsResponse getListingsResponse) {
        this.getListingsResponse = getListingsResponse;
        return this;
    }
    public Long statusCode;
    public CollectionListingsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}