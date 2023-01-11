package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortMapping
 * An object representing a port mapping.
**/
public class PortMapping {
    @JsonProperty("applicationPort")
    public Long applicationPort;
    public PortMapping withApplicationPort(Long applicationPort) {
        this.applicationPort = applicationPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableOnPublicIp")
    public Boolean enableOnPublicIp;
    public PortMapping withEnableOnPublicIp(Boolean enableOnPublicIp) {
        this.enableOnPublicIp = enableOnPublicIp;
        return this;
    }
    @JsonProperty("jobPort")
    public Long jobPort;
    public PortMapping withJobPort(Long jobPort) {
        this.jobPort = jobPort;
        return this;
    }
}