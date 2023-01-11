package openapisdk.models.operations;



public class ListingsAllResponse {
    public String contentType;
    public ListingsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetListingsResponse getListingsResponse;
    public ListingsAllResponse withGetListingsResponse(openapisdk.models.shared.GetListingsResponse getListingsResponse) {
        this.getListingsResponse = getListingsResponse;
        return this;
    }
    public Long statusCode;
    public ListingsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}