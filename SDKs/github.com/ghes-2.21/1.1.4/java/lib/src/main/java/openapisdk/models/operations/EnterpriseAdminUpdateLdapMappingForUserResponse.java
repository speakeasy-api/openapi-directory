package openapisdk.models.operations;



public class EnterpriseAdminUpdateLdapMappingForUserResponse {
    public String contentType;
    public EnterpriseAdminUpdateLdapMappingForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminUpdateLdapMappingForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LdapMappingUser ldapMappingUser;
    public EnterpriseAdminUpdateLdapMappingForUserResponse withLdapMappingUser(openapisdk.models.shared.LdapMappingUser ldapMappingUser) {
        this.ldapMappingUser = ldapMappingUser;
        return this;
    }
}