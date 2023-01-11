package openapisdk.models.operations;



public class PostGenerateOrganizationsAccessReportResponse {
    public byte[] body;
    public PostGenerateOrganizationsAccessReportResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGenerateOrganizationsAccessReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGenerateOrganizationsAccessReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}