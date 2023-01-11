package openapisdk.models.operations;



public class GetCharityOrgsResponse {
    public openapisdk.models.shared.CharitySearchResponse charitySearchResponse;
    public GetCharityOrgsResponse withCharitySearchResponse(openapisdk.models.shared.CharitySearchResponse charitySearchResponse) {
        this.charitySearchResponse = charitySearchResponse;
        return this;
    }
    public String contentType;
    public GetCharityOrgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCharityOrgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}