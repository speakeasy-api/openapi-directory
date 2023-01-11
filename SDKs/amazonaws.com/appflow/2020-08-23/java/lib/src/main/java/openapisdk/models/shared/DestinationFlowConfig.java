package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationFlowConfig
 *  Contains information about the configuration of destination connectors present in the flow. 
**/
public class DestinationFlowConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public DestinationFlowConfig withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonProperty("connectorType")
    public ConnectorTypeEnum connectorType;
    public DestinationFlowConfig withConnectorType(ConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonProperty("destinationConnectorProperties")
    public DestinationConnectorProperties destinationConnectorProperties;
    public DestinationFlowConfig withDestinationConnectorProperties(DestinationConnectorProperties destinationConnectorProperties) {
        this.destinationConnectorProperties = destinationConnectorProperties;
        return this;
    }
}