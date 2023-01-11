package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdateLdapMappingForUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap_dn")
    public String ldapDn;
    public EnterpriseAdminUpdateLdapMappingForUserRequestBody withLdapDn(String ldapDn) {
        this.ldapDn = ldapDn;
        return this;
    }
}