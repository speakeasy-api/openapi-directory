package openapisdk.models.operations;



public class ReposCreateUsingTemplateResponse {
    public String contentType;
    public ReposCreateUsingTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposCreateUsingTemplateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposCreateUsingTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Repository repository;
    public ReposCreateUsingTemplateResponse withRepository(openapisdk.models.shared.Repository repository) {
        this.repository = repository;
        return this;
    }
}