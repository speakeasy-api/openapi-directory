package openapisdk.models.operations;



public class GetGameMediaResponse {
    public String contentType;
    public GetGameMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GameMedia[] gameMedias;
    public GetGameMediaResponse withGameMedias(openapisdk.models.shared.GameMedia[] gameMedias) {
        this.gameMedias = gameMedias;
        return this;
    }
    public Long statusCode;
    public GetGameMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}