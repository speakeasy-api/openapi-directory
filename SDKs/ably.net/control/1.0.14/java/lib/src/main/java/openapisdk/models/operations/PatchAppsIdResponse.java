package openapisdk.models.operations;



public class PatchAppsIdResponse {
    public String contentType;
    public PatchAppsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAppsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AppResponse appResponse;
    public PatchAppsIdResponse withAppResponse(openapisdk.models.shared.AppResponse appResponse) {
        this.appResponse = appResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchAppsIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}