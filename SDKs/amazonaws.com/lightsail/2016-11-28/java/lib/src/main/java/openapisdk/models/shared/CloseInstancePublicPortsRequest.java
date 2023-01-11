package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CloseInstancePublicPortsRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public CloseInstancePublicPortsRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonProperty("portInfo")
    public PortInfo portInfo;
    public CloseInstancePublicPortsRequest withPortInfo(PortInfo portInfo) {
        this.portInfo = portInfo;
        return this;
    }
}