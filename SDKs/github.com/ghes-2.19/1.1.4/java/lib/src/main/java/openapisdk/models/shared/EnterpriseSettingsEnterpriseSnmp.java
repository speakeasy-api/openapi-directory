package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseSnmp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("community")
    public String community;
    public EnterpriseSettingsEnterpriseSnmp withCommunity(String community) {
        this.community = community;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public EnterpriseSettingsEnterpriseSnmp withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}