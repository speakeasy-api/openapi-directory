package openapisdk.models.operations;



public class ReposGetStatusChecksProtectionResponse {
    public String contentType;
    public ReposGetStatusChecksProtectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetStatusChecksProtectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetStatusChecksProtectionResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.StatusCheckPolicy statusCheckPolicy;
    public ReposGetStatusChecksProtectionResponse withStatusCheckPolicy(openapisdk.models.shared.StatusCheckPolicy statusCheckPolicy) {
        this.statusCheckPolicy = statusCheckPolicy;
        return this;
    }
}