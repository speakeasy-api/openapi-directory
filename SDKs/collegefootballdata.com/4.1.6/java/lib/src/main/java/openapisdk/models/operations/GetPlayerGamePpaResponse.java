package openapisdk.models.operations;



public class GetPlayerGamePpaResponse {
    public String contentType;
    public GetPlayerGamePpaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerGamePpa[] playerGamePPAS;
    public GetPlayerGamePpaResponse withPlayerGamePpas(openapisdk.models.shared.PlayerGamePpa[] playerGamePPAS) {
        this.playerGamePPAS = playerGamePPAS;
        return this;
    }
    public Long statusCode;
    public GetPlayerGamePpaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}