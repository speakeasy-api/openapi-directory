package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorDefinitionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectorDefinitionId")
    public String connectorDefinitionId;
    public GetConnectorDefinitionPathParams withConnectorDefinitionId(String connectorDefinitionId) {
        this.connectorDefinitionId = connectorDefinitionId;
        return this;
    }
}