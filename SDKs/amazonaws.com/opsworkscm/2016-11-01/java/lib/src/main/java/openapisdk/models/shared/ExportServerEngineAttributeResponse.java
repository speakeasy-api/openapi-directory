package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportServerEngineAttributeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineAttribute")
    public EngineAttribute engineAttribute;
    public ExportServerEngineAttributeResponse withEngineAttribute(EngineAttribute engineAttribute) {
        this.engineAttribute = engineAttribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerName")
    public String serverName;
    public ExportServerEngineAttributeResponse withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}