package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceFlowConfig
 *  Contains information about the configuration of the source connector used in the flow. 
**/
public class SourceFlowConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public SourceFlowConfig withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonProperty("connectorType")
    public ConnectorTypeEnum connectorType;
    public SourceFlowConfig withConnectorType(ConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incrementalPullConfig")
    public IncrementalPullConfig incrementalPullConfig;
    public SourceFlowConfig withIncrementalPullConfig(IncrementalPullConfig incrementalPullConfig) {
        this.incrementalPullConfig = incrementalPullConfig;
        return this;
    }
    @JsonProperty("sourceConnectorProperties")
    public SourceConnectorProperties sourceConnectorProperties;
    public SourceFlowConfig withSourceConnectorProperties(SourceConnectorProperties sourceConnectorProperties) {
        this.sourceConnectorProperties = sourceConnectorProperties;
        return this;
    }
}