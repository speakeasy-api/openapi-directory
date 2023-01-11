package openapisdk.models.operations;



public class ReposGetDeployKeyResponse {
    public String contentType;
    public ReposGetDeployKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetDeployKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetDeployKeyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.DeployKey deployKey;
    public ReposGetDeployKeyResponse withDeployKey(openapisdk.models.shared.DeployKey deployKey) {
        this.deployKey = deployKey;
        return this;
    }
}