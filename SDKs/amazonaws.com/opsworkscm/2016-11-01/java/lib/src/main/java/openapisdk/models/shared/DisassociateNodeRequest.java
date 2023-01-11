package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateNodeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineAttributes")
    public EngineAttribute[] engineAttributes;
    public DisassociateNodeRequest withEngineAttributes(EngineAttribute[] engineAttributes) {
        this.engineAttributes = engineAttributes;
        return this;
    }
    @JsonProperty("NodeName")
    public String nodeName;
    public DisassociateNodeRequest withNodeName(String nodeName) {
        this.nodeName = nodeName;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public DisassociateNodeRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}