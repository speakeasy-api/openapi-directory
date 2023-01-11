package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateConnectorProfileRequestBodyConnectorProfileConfig
 *  Defines the connector-specific configuration and credentials for the connector profile. 
**/
public class UpdateConnectorProfileRequestBodyConnectorProfileConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileCredentials")
    public openapisdk.models.shared.ConnectorProfileCredentials connectorProfileCredentials;
    public UpdateConnectorProfileRequestBodyConnectorProfileConfig withConnectorProfileCredentials(openapisdk.models.shared.ConnectorProfileCredentials connectorProfileCredentials) {
        this.connectorProfileCredentials = connectorProfileCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileProperties")
    public openapisdk.models.shared.ConnectorProfileProperties connectorProfileProperties;
    public UpdateConnectorProfileRequestBodyConnectorProfileConfig withConnectorProfileProperties(openapisdk.models.shared.ConnectorProfileProperties connectorProfileProperties) {
        this.connectorProfileProperties = connectorProfileProperties;
        return this;
    }
}