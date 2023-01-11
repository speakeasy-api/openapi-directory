package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectorArn")
    public String connectorArn;
    public UpdateConnectorPathParams withConnectorArn(String connectorArn) {
        this.connectorArn = connectorArn;
        return this;
    }
}