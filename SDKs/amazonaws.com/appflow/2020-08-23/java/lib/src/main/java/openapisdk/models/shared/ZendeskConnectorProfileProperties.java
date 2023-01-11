package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ZendeskConnectorProfileProperties
 *  The connector-specific profile properties required when using Zendesk. 
**/
public class ZendeskConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public ZendeskConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}