package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientPropertiesResult
 * Information about the Amazon WorkSpaces client.
**/
public class ClientPropertiesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientProperties")
    public ClientProperties clientProperties;
    public ClientPropertiesResult withClientProperties(ClientProperties clientProperties) {
        this.clientProperties = clientProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public ClientPropertiesResult withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}