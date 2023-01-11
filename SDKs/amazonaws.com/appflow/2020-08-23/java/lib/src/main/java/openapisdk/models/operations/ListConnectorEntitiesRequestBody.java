package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectorEntitiesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorProfileName")
    public String connectorProfileName;
    public ListConnectorEntitiesRequestBody withConnectorProfileName(String connectorProfileName) {
        this.connectorProfileName = connectorProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorType")
    public ListConnectorEntitiesRequestBodyConnectorTypeEnum connectorType;
    public ListConnectorEntitiesRequestBody withConnectorType(ListConnectorEntitiesRequestBodyConnectorTypeEnum connectorType) {
        this.connectorType = connectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitiesPath")
    public String entitiesPath;
    public ListConnectorEntitiesRequestBody withEntitiesPath(String entitiesPath) {
        this.entitiesPath = entitiesPath;
        return this;
    }
}