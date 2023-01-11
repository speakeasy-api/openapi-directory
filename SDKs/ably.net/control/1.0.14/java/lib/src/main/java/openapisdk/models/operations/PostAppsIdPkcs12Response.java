package openapisdk.models.operations;



public class PostAppsIdPkcs12Response {
    public String contentType;
    public PostAppsIdPkcs12Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAppsIdPkcs12Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AppResponse appResponse;
    public PostAppsIdPkcs12Response withAppResponse(openapisdk.models.shared.AppResponse appResponse) {
        this.appResponse = appResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostAppsIdPkcs12Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}