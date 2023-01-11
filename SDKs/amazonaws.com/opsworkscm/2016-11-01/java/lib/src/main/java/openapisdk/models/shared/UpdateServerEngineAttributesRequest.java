package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServerEngineAttributesRequest {
    @JsonProperty("AttributeName")
    public String attributeName;
    public UpdateServerEngineAttributesRequest withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeValue")
    public String attributeValue;
    public UpdateServerEngineAttributesRequest withAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public UpdateServerEngineAttributesRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}