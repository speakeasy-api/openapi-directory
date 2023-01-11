package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportServerEngineAttributeRequest {
    @JsonProperty("ExportAttributeName")
    public String exportAttributeName;
    public ExportServerEngineAttributeRequest withExportAttributeName(String exportAttributeName) {
        this.exportAttributeName = exportAttributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputAttributes")
    public EngineAttribute[] inputAttributes;
    public ExportServerEngineAttributeRequest withInputAttributes(EngineAttribute[] inputAttributes) {
        this.inputAttributes = inputAttributes;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public ExportServerEngineAttributeRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}