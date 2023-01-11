package openapisdk.models.operations;



public class GetSshKeyResponse {
    public String contentType;
    public GetSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshKeyResponse sshKeyResponse;
    public GetSshKeyResponse withSshKeyResponse(openapisdk.models.shared.SshKeyResponse sshKeyResponse) {
        this.sshKeyResponse = sshKeyResponse;
        return this;
    }
    public Long statusCode;
    public GetSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}