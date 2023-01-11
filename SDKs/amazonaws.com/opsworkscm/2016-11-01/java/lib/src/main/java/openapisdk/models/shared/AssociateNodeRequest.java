package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateNodeRequest {
    @JsonProperty("EngineAttributes")
    public EngineAttribute[] engineAttributes;
    public AssociateNodeRequest withEngineAttributes(EngineAttribute[] engineAttributes) {
        this.engineAttributes = engineAttributes;
        return this;
    }
    @JsonProperty("NodeName")
    public String nodeName;
    public AssociateNodeRequest withNodeName(String nodeName) {
        this.nodeName = nodeName;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public AssociateNodeRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}