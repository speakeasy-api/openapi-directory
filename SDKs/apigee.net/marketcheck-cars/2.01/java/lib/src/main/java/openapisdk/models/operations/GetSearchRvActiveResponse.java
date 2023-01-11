package openapisdk.models.operations;



public class GetSearchRvActiveResponse {
    public String contentType;
    public GetSearchRvActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchRvActiveResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.RvSearchResponse rvSearchResponse;
    public GetSearchRvActiveResponse withRvSearchResponse(openapisdk.models.shared.RvSearchResponse rvSearchResponse) {
        this.rvSearchResponse = rvSearchResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchRvActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}