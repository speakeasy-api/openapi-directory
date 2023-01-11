package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SlackConnectorProfileProperties
 *  The connector-specific profile properties required when using Slack. 
**/
public class SlackConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public SlackConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}