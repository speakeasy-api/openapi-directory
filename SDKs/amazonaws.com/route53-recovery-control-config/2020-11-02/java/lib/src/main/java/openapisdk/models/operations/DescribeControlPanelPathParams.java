package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeControlPanelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ControlPanelArn")
    public String controlPanelArn;
    public DescribeControlPanelPathParams withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
}