package openapisdk.models.operations;



public class SuggestResponse {
    public String contentType;
    public SuggestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SearchException searchException;
    public SuggestResponse withSearchException(openapisdk.models.shared.SearchException searchException) {
        this.searchException = searchException;
        return this;
    }
    public Long statusCode;
    public SuggestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuggestResponse suggestResponse;
    public SuggestResponse withSuggestResponse(openapisdk.models.shared.SuggestResponse suggestResponse) {
        this.suggestResponse = suggestResponse;
        return this;
    }
}