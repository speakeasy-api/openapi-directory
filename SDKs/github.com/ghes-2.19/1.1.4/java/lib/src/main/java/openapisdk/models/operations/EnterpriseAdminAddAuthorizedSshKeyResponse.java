package openapisdk.models.operations;



public class EnterpriseAdminAddAuthorizedSshKeyResponse {
    public String contentType;
    public EnterpriseAdminAddAuthorizedSshKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminAddAuthorizedSshKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SshKey[] sshKeys;
    public EnterpriseAdminAddAuthorizedSshKeyResponse withSshKeys(openapisdk.models.shared.SshKey[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
}