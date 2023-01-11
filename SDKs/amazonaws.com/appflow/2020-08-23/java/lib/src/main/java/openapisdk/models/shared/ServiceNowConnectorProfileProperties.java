package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ServiceNowConnectorProfileProperties
 *  The connector-specific profile properties required when using ServiceNow. 
**/
public class ServiceNowConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public ServiceNowConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}