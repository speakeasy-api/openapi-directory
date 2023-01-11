package openapisdk.models.operations;



public class AppsGetBySlugResponse {
    public String contentType;
    public AppsGetBySlugResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetBySlugResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsGetBySlug415ApplicationJson appsGetBySlug415ApplicationJSONObject;
    public AppsGetBySlugResponse withAppsGetBySlug415ApplicationJsonObject(AppsGetBySlug415ApplicationJson appsGetBySlug415ApplicationJSONObject) {
        this.appsGetBySlug415ApplicationJSONObject = appsGetBySlug415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsGetBySlugResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public java.util.Map<String, Object> integration;
    public AppsGetBySlugResponse withIntegration(java.util.Map<String, Object> integration) {
        this.integration = integration;
        return this;
    }
}