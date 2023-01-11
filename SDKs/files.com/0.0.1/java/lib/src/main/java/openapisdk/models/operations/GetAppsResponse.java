package openapisdk.models.operations;



public class GetAppsResponse {
    public openapisdk.models.shared.AppEntity[] appEntities;
    public GetAppsResponse withAppEntities(openapisdk.models.shared.AppEntity[] appEntities) {
        this.appEntities = appEntities;
        return this;
    }
    public String contentType;
    public GetAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}