package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseGithubSsl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cert")
    public String cert;
    public EnterpriseSettingsEnterpriseGithubSsl withCert(String cert) {
        this.cert = cert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public EnterpriseSettingsEnterpriseGithubSsl withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public EnterpriseSettingsEnterpriseGithubSsl withKey(String key) {
        this.key = key;
        return this;
    }
}