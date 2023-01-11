package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesforceConnectorProfileProperties
 *  The connector-specific profile properties required when using Salesforce. 
**/
public class SalesforceConnectorProfileProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceUrl")
    public String instanceUrl;
    public SalesforceConnectorProfileProperties withInstanceUrl(String instanceUrl) {
        this.instanceUrl = instanceUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSandboxEnvironment")
    public Boolean isSandboxEnvironment;
    public SalesforceConnectorProfileProperties withIsSandboxEnvironment(Boolean isSandboxEnvironment) {
        this.isSandboxEnvironment = isSandboxEnvironment;
        return this;
    }
}