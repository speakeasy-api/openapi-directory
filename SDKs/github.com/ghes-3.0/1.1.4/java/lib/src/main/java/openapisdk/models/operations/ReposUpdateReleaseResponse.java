package openapisdk.models.operations;



public class ReposUpdateReleaseResponse {
    public String contentType;
    public ReposUpdateReleaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposUpdateReleaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Release release;
    public ReposUpdateReleaseResponse withRelease(openapisdk.models.shared.Release release) {
        this.release = release;
        return this;
    }
}