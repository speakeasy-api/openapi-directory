package openapisdk.models.operations;



public class CategoryListingsAllResponse {
    public String contentType;
    public CategoryListingsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetListingsResponse getListingsResponse;
    public CategoryListingsAllResponse withGetListingsResponse(openapisdk.models.shared.GetListingsResponse getListingsResponse) {
        this.getListingsResponse = getListingsResponse;
        return this;
    }
    public Long statusCode;
    public CategoryListingsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}