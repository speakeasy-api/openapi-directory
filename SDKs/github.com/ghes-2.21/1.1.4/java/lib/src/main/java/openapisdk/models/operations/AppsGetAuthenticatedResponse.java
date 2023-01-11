package openapisdk.models.operations;



public class AppsGetAuthenticatedResponse {
    public String contentType;
    public AppsGetAuthenticatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetAuthenticatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> integration;
    public AppsGetAuthenticatedResponse withIntegration(java.util.Map<String, Object> integration) {
        this.integration = integration;
        return this;
    }
}