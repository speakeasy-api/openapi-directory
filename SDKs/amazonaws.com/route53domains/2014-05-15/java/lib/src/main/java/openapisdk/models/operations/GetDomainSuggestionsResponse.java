package openapisdk.models.operations;



public class GetDomainSuggestionsResponse {
    public String contentType;
    public GetDomainSuggestionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainSuggestionsResponse getDomainSuggestionsResponse;
    public GetDomainSuggestionsResponse withGetDomainSuggestionsResponse(openapisdk.models.shared.GetDomainSuggestionsResponse getDomainSuggestionsResponse) {
        this.getDomainSuggestionsResponse = getDomainSuggestionsResponse;
        return this;
    }
    public Object invalidInput;
    public GetDomainSuggestionsResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public GetDomainSuggestionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public GetDomainSuggestionsResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}