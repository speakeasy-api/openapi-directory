package openapisdk.models.operations;



public class ReposListReleasesResponse {
    public String contentType;
    public ReposListReleasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ReposListReleasesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ReposListReleasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposListReleasesResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Release[] releases;
    public ReposListReleasesResponse withReleases(openapisdk.models.shared.Release[] releases) {
        this.releases = releases;
        return this;
    }
}