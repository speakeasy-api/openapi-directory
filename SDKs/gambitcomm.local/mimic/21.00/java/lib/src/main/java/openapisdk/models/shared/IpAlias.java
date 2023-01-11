package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IpAlias {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IP")
    public String ip;
    public IpAlias withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interface")
    public String interface_;
    public IpAlias withInterface(String interface_) {
        this.interface_ = interface_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mask")
    public String mask;
    public IpAlias withMask(String mask) {
        this.mask = mask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public IpAlias withPort(Integer port) {
        this.port = port;
        return this;
    }
}