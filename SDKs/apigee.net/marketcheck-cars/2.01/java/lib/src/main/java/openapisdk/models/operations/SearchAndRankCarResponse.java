package openapisdk.models.operations;



public class SearchAndRankCarResponse {
    public openapisdk.models.shared.CarRankResponse carRankResponse;
    public SearchAndRankCarResponse withCarRankResponse(openapisdk.models.shared.CarRankResponse carRankResponse) {
        this.carRankResponse = carRankResponse;
        return this;
    }
    public String contentType;
    public SearchAndRankCarResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SearchAndRankCarResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public SearchAndRankCarResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}