package openapisdk.models.operations;



public class ReposListPagesBuildsResponse {
    public String contentType;
    public ReposListPagesBuildsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListPagesBuildsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListPagesBuildsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PageBuild[] pageBuilds;
    public ReposListPagesBuildsResponse withPageBuilds(openapisdk.models.shared.PageBuild[] pageBuilds) {
        this.pageBuilds = pageBuilds;
        return this;
    }
}