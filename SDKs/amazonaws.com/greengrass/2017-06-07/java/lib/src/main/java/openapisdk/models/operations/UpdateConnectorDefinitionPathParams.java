package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectorDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectorDefinitionId")
    public String connectorDefinitionId;
    public UpdateConnectorDefinitionPathParams withConnectorDefinitionId(String connectorDefinitionId) {
        this.connectorDefinitionId = connectorDefinitionId;
        return this;
    }
}