package openapisdk.models.operations;



public class GetVolumesFsJsonResponse {
    public String contentType;
    public GetVolumesFsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Fileshare[] fileshares;
    public GetVolumesFsJsonResponse withFileshares(openapisdk.models.shared.Fileshare[] fileshares) {
        this.fileshares = fileshares;
        return this;
    }
    public Long statusCode;
    public GetVolumesFsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}