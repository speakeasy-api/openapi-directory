package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountAttributesAllowedIp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipEnd")
    public String ipEnd;
    public AccountAttributesAllowedIp withIpEnd(String ipEnd) {
        this.ipEnd = ipEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipStart")
    public String ipStart;
    public AccountAttributesAllowedIp withIpStart(String ipStart) {
        this.ipStart = ipStart;
        return this;
    }
}