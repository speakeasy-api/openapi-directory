package openapisdk.models.operations;



public class GetSpecsCarAutoCompleteResponse {
    public String contentType;
    public GetSpecsCarAutoCompleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSpecsCarAutoCompleteResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SpecsAutoCompleteResponse specsAutoCompleteResponse;
    public GetSpecsCarAutoCompleteResponse withSpecsAutoCompleteResponse(openapisdk.models.shared.SpecsAutoCompleteResponse specsAutoCompleteResponse) {
        this.specsAutoCompleteResponse = specsAutoCompleteResponse;
        return this;
    }
    public Long statusCode;
    public GetSpecsCarAutoCompleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}