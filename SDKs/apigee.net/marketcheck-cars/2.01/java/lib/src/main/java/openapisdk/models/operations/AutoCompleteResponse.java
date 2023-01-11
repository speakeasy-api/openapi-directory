package openapisdk.models.operations;



public class AutoCompleteResponse {
    public String contentType;
    public AutoCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public AutoCompleteResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse;
    public AutoCompleteResponse withSearchAutoCompleteResponse(openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse) {
        this.searchAutoCompleteResponse = searchAutoCompleteResponse;
        return this;
    }
    public Long statusCode;
    public AutoCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}