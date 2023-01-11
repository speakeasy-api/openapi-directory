package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectorArn")
    public String connectorArn;
    public DeleteConnectorPathParams withConnectorArn(String connectorArn) {
        this.connectorArn = connectorArn;
        return this;
    }
}