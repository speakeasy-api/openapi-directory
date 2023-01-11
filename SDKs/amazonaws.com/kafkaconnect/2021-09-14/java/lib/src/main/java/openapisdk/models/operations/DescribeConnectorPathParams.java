package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectorArn")
    public String connectorArn;
    public DescribeConnectorPathParams withConnectorArn(String connectorArn) {
        this.connectorArn = connectorArn;
        return this;
    }
}