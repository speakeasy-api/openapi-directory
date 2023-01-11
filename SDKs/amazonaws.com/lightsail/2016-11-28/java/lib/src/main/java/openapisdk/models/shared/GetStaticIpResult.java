package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStaticIpResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticIp")
    public StaticIp staticIp;
    public GetStaticIpResult withStaticIp(StaticIp staticIp) {
        this.staticIp = staticIp;
        return this;
    }
}