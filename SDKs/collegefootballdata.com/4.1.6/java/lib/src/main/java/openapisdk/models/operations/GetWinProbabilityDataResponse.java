package openapisdk.models.operations;



public class GetWinProbabilityDataResponse {
    public String contentType;
    public GetWinProbabilityDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayWp[] playWPS;
    public GetWinProbabilityDataResponse withPlayWps(openapisdk.models.shared.PlayWp[] playWPS) {
        this.playWPS = playWPS;
        return this;
    }
    public Long statusCode;
    public GetWinProbabilityDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}