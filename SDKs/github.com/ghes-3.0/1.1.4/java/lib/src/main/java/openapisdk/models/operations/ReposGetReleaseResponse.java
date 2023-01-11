package openapisdk.models.operations;



public class ReposGetReleaseResponse {
    public String contentType;
    public ReposGetReleaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetReleaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetReleaseResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Release release;
    public ReposGetReleaseResponse withRelease(openapisdk.models.shared.Release release) {
        this.release = release;
        return this;
    }
}