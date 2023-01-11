package openapisdk.models.operations;



public class GetPlayerSeasonPpaResponse {
    public String contentType;
    public GetPlayerSeasonPpaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerSeasonPpa[] playerSeasonPPAS;
    public GetPlayerSeasonPpaResponse withPlayerSeasonPpas(openapisdk.models.shared.PlayerSeasonPpa[] playerSeasonPPAS) {
        this.playerSeasonPPAS = playerSeasonPPAS;
        return this;
    }
    public Long statusCode;
    public GetPlayerSeasonPpaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}