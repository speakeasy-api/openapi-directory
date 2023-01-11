package openapisdk.models.operations;



public class GetGamePpaResponse {
    public String contentType;
    public GetGamePpaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GamePpa[] gamePPAS;
    public GetGamePpaResponse withGamePpas(openapisdk.models.shared.GamePpa[] gamePPAS) {
        this.gamePPAS = gamePPAS;
        return this;
    }
    public Long statusCode;
    public GetGamePpaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}