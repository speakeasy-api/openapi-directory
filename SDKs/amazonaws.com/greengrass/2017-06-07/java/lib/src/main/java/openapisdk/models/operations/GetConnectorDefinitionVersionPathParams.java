package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectorDefinitionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectorDefinitionId")
    public String connectorDefinitionId;
    public GetConnectorDefinitionVersionPathParams withConnectorDefinitionId(String connectorDefinitionId) {
        this.connectorDefinitionId = connectorDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ConnectorDefinitionVersionId")
    public String connectorDefinitionVersionId;
    public GetConnectorDefinitionVersionPathParams withConnectorDefinitionVersionId(String connectorDefinitionVersionId) {
        this.connectorDefinitionVersionId = connectorDefinitionVersionId;
        return this;
    }
}