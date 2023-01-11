package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateFlowRequestBodySourceFlowConfig
 *  Contains information about the configuration of the source connector used in the flow. 
**/
public class CreateFlowRequestBodySourceFlowConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public CreateFlowRequestBodySourceFlowConfig withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorType")
    public openapisdk.models.shared.ConnectorTypeEnum connectorType;
    public CreateFlowRequestBodySourceFlowConfig withConnectorType(openapisdk.models.shared.ConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incrementalPullConfig")
    public openapisdk.models.shared.IncrementalPullConfig incrementalPullConfig;
    public CreateFlowRequestBodySourceFlowConfig withIncrementalPullConfig(openapisdk.models.shared.IncrementalPullConfig incrementalPullConfig) {
        this.incrementalPullConfig = incrementalPullConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceConnectorProperties")
    public openapisdk.models.shared.SourceConnectorProperties sourceConnectorProperties;
    public CreateFlowRequestBodySourceFlowConfig withSourceConnectorProperties(openapisdk.models.shared.SourceConnectorProperties sourceConnectorProperties) {
        this.sourceConnectorProperties = sourceConnectorProperties;
        return this;
    }
}