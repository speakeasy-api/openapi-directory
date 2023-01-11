package openapisdk.models.operations;



public class GetSearchRvAutoCompleteResponse {
    public String contentType;
    public GetSearchRvAutoCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchRvAutoCompleteResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse;
    public GetSearchRvAutoCompleteResponse withSearchAutoCompleteResponse(openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse) {
        this.searchAutoCompleteResponse = searchAutoCompleteResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchRvAutoCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}