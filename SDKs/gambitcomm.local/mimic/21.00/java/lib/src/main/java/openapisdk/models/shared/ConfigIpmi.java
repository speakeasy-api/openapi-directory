package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigIpmi {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_port")
    public Integer primaryPort;
    public ConfigIpmi withPrimaryPort(Integer primaryPort) {
        this.primaryPort = primaryPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secure_port")
    public Integer securePort;
    public ConfigIpmi withSecurePort(Integer securePort) {
        this.securePort = securePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ConfigIpmi withVersion(String version) {
        this.version = version;
        return this;
    }
}