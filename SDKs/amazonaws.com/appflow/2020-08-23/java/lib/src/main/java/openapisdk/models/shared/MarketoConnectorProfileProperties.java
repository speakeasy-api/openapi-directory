package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MarketoConnectorProfileProperties
 *  The connector-specific profile properties required when using Marketo. 
**/
public class MarketoConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public MarketoConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}