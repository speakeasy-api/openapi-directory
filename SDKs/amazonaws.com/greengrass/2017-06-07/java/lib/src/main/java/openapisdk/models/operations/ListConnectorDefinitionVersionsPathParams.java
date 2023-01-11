package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConnectorDefinitionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectorDefinitionId")
    public String connectorDefinitionId;
    public ListConnectorDefinitionVersionsPathParams withConnectorDefinitionId(String connectorDefinitionId) {
        this.connectorDefinitionId = connectorDefinitionId;
        return this;
    }
}