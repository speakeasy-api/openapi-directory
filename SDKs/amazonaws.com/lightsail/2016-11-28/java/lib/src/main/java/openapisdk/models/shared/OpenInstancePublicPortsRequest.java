package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OpenInstancePublicPortsRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public OpenInstancePublicPortsRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonProperty("portInfo")
    public PortInfo portInfo;
    public OpenInstancePublicPortsRequest withPortInfo(PortInfo portInfo) {
        this.portInfo = portInfo;
        return this;
    }
}