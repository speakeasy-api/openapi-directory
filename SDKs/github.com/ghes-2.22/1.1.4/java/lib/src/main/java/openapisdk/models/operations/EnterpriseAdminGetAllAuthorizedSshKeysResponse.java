package openapisdk.models.operations;



public class EnterpriseAdminGetAllAuthorizedSshKeysResponse {
    public String contentType;
    public EnterpriseAdminGetAllAuthorizedSshKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetAllAuthorizedSshKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SshKey[] sshKeys;
    public EnterpriseAdminGetAllAuthorizedSshKeysResponse withSshKeys(openapisdk.models.shared.SshKey[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
}