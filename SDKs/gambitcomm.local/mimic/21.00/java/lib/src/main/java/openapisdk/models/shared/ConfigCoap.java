package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigCoap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keystore")
    public String keystore;
    public ConfigCoap withKeystore(String keystore) {
        this.keystore = keystore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_port")
    public Integer primaryPort;
    public ConfigCoap withPrimaryPort(Integer primaryPort) {
        this.primaryPort = primaryPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public String rule;
    public ConfigCoap withRule(String rule) {
        this.rule = rule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secure_port")
    public Integer securePort;
    public ConfigCoap withSecurePort(Integer securePort) {
        this.securePort = securePort;
        return this;
    }
}