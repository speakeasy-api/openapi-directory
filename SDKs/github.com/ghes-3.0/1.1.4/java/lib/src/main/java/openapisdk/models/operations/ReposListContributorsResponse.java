package openapisdk.models.operations;



public class ReposListContributorsResponse {
    public String contentType;
    public ReposListContributorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListContributorsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListContributorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListContributorsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Contributor[] contributors;
    public ReposListContributorsResponse withContributors(openapisdk.models.shared.Contributor[] contributors) {
        this.contributors = contributors;
        return this;
    }
}