package openapisdk.models.operations;



public class AddSshKeyResponse {
    public String contentType;
    public AddSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SshKeyResponse sshKeyResponse;
    public AddSshKeyResponse withSshKeyResponse(openapisdk.models.shared.SshKeyResponse sshKeyResponse) {
        this.sshKeyResponse = sshKeyResponse;
        return this;
    }
    public Long statusCode;
    public AddSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}