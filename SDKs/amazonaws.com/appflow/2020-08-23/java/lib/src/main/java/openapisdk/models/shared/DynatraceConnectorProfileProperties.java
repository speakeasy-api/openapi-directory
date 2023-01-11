package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DynatraceConnectorProfileProperties
 *  The connector-specific profile properties required by Dynatrace. 
**/
public class DynatraceConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public DynatraceConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}