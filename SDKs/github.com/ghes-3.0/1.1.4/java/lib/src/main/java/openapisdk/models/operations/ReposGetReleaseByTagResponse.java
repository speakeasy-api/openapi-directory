package openapisdk.models.operations;



public class ReposGetReleaseByTagResponse {
    public String contentType;
    public ReposGetReleaseByTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetReleaseByTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetReleaseByTagResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Release release;
    public ReposGetReleaseByTagResponse withRelease(openapisdk.models.shared.Release release) {
        this.release = release;
        return this;
    }
}