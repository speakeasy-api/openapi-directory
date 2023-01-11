package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseSyslog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public EnterpriseSettingsEnterpriseSyslog withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol_name")
    public String protocolName;
    public EnterpriseSettingsEnterpriseSyslog withProtocolName(String protocolName) {
        this.protocolName = protocolName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public String server;
    public EnterpriseSettingsEnterpriseSyslog withServer(String server) {
        this.server = server;
        return this;
    }
}