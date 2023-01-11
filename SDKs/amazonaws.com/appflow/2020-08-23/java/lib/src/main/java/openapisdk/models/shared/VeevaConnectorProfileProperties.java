package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VeevaConnectorProfileProperties
 *  The connector-specific profile properties required when using Veeva. 
**/
public class VeevaConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public VeevaConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}