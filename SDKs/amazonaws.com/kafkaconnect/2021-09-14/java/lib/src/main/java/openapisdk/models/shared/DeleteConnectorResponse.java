package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteConnectorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorArn")
    public String connectorArn;
    public DeleteConnectorResponse withConnectorArn(String connectorArn) {
        this.connectorArn = connectorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorState")
    public ConnectorStateEnum connectorState;
    public DeleteConnectorResponse withConnectorState(ConnectorStateEnum connectorState) {
        this.connectorState = connectorState;
        return this;
    }
}