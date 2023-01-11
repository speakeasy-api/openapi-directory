package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseLdapProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public EnterpriseSettingsEnterpriseLdapProfile withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mail")
    public String mail;
    public EnterpriseSettingsEnterpriseLdapProfile withMail(String mail) {
        this.mail = mail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnterpriseSettingsEnterpriseLdapProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public EnterpriseSettingsEnterpriseLdapProfile withUid(String uid) {
        this.uid = uid;
        return this;
    }
}