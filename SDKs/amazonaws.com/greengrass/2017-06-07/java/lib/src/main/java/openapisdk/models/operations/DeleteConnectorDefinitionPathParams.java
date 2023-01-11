package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectorDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectorDefinitionId")
    public String connectorDefinitionId;
    public DeleteConnectorDefinitionPathParams withConnectorDefinitionId(String connectorDefinitionId) {
        this.connectorDefinitionId = connectorDefinitionId;
        return this;
    }
}