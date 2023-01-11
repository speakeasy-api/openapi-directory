package openapisdk.models.operations;



public class HeadSettingsOrganizationsResponse {
    public String contentType;
    public HeadSettingsOrganizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public HeadSettingsOrganizationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public HeadSettingsOrganizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}