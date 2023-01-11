package openapisdk.models.operations;



public class GetTaxonomyTermsResponse {
    public String contentType;
    public GetTaxonomyTermsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTaxonomyTermsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SpecsAutoCompleteResponse specsAutoCompleteResponse;
    public GetTaxonomyTermsResponse withSpecsAutoCompleteResponse(openapisdk.models.shared.SpecsAutoCompleteResponse specsAutoCompleteResponse) {
        this.specsAutoCompleteResponse = specsAutoCompleteResponse;
        return this;
    }
    public Long statusCode;
    public GetTaxonomyTermsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}