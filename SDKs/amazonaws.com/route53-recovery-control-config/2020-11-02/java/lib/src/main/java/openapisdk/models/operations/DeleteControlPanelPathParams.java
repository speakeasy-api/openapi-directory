package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteControlPanelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ControlPanelArn")
    public String controlPanelArn;
    public DeleteControlPanelPathParams withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
}