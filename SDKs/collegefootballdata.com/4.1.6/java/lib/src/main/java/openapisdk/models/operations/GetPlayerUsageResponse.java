package openapisdk.models.operations;



public class GetPlayerUsageResponse {
    public String contentType;
    public GetPlayerUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerUsage[] playerUsages;
    public GetPlayerUsageResponse withPlayerUsages(openapisdk.models.shared.PlayerUsage[] playerUsages) {
        this.playerUsages = playerUsages;
        return this;
    }
    public Long statusCode;
    public GetPlayerUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}