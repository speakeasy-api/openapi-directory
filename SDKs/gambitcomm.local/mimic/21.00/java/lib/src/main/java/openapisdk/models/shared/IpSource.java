package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IpSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IP")
    public String ip;
    public IpSource withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public IpSource withPort(Integer port) {
        this.port = port;
        return this;
    }
}