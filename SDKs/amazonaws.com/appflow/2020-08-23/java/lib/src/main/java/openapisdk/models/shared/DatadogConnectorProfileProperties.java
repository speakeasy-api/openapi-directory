package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatadogConnectorProfileProperties
 *  The connector-specific profile properties required by Datadog. 
**/
public class DatadogConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public DatadogConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}