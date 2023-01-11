package openapisdk.models.operations;



public class ReposGetLatestReleaseResponse {
    public String contentType;
    public ReposGetLatestReleaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetLatestReleaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Release release;
    public ReposGetLatestReleaseResponse withRelease(openapisdk.models.shared.Release release) {
        this.release = release;
        return this;
    }
}