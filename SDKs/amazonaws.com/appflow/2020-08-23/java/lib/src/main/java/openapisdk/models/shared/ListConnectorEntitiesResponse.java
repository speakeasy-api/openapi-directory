package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListConnectorEntitiesResponse {
    @JsonProperty("connectorEntityMap")
    public java.util.Map<String, ConnectorEntity[]> connectorEntityMap;
    public ListConnectorEntitiesResponse withConnectorEntityMap(java.util.Map<String, ConnectorEntity[]> connectorEntityMap) {
        this.connectorEntityMap = connectorEntityMap;
        return this;
    }
}