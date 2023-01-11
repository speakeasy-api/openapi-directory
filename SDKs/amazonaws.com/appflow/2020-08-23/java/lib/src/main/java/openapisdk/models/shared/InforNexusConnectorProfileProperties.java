package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InforNexusConnectorProfileProperties
 *  The connector-specific profile properties required by Infor Nexus. 
**/
public class InforNexusConnectorProfileProperties {
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public InforNexusConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
}