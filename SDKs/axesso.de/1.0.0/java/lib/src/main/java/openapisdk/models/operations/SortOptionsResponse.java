package openapisdk.models.operations;



public class SortOptionsResponse {
    public String contentType;
    public SortOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SortOptionResponse sortOptionResponse;
    public SortOptionsResponse withSortOptionResponse(openapisdk.models.shared.SortOptionResponse sortOptionResponse) {
        this.sortOptionResponse = sortOptionResponse;
        return this;
    }
    public Long statusCode;
    public SortOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}