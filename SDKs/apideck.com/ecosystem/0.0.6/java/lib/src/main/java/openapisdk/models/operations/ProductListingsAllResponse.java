package openapisdk.models.operations;



public class ProductListingsAllResponse {
    public String contentType;
    public ProductListingsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetListingsResponse getListingsResponse;
    public ProductListingsAllResponse withGetListingsResponse(openapisdk.models.shared.GetListingsResponse getListingsResponse) {
        this.getListingsResponse = getListingsResponse;
        return this;
    }
    public Long statusCode;
    public ProductListingsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}