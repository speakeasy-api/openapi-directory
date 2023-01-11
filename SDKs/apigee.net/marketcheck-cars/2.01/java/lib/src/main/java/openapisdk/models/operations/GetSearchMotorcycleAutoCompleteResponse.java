package openapisdk.models.operations;



public class GetSearchMotorcycleAutoCompleteResponse {
    public String contentType;
    public GetSearchMotorcycleAutoCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchMotorcycleAutoCompleteResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse;
    public GetSearchMotorcycleAutoCompleteResponse withSearchAutoCompleteResponse(openapisdk.models.shared.SearchAutoCompleteResponse searchAutoCompleteResponse) {
        this.searchAutoCompleteResponse = searchAutoCompleteResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchMotorcycleAutoCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}