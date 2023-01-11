package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInstanceAccessDetailsRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public GetInstanceAccessDetailsRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public InstanceAccessProtocolEnum protocol;
    public GetInstanceAccessDetailsRequest withProtocol(InstanceAccessProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}