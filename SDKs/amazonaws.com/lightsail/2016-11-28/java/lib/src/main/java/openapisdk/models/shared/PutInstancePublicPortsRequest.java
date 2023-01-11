package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutInstancePublicPortsRequest {
    @JsonProperty("instanceName")
    public String instanceName;
    public PutInstancePublicPortsRequest withInstanceName(String instanceName) {
        this.instanceName = instanceName;
        return this;
    }
    @JsonProperty("portInfos")
    public PortInfo[] portInfos;
    public PutInstancePublicPortsRequest withPortInfos(PortInfo[] portInfos) {
        this.portInfos = portInfos;
        return this;
    }
}