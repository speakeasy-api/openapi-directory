package openapisdk.models.operations;



public class ListingsOneResponse {
    public String contentType;
    public ListingsOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetListingResponse getListingResponse;
    public ListingsOneResponse withGetListingResponse(openapisdk.models.shared.GetListingResponse getListingResponse) {
        this.getListingResponse = getListingResponse;
        return this;
    }
    public Long statusCode;
    public ListingsOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}