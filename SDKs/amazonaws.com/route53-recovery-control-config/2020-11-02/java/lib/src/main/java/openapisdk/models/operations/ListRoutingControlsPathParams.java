package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRoutingControlsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ControlPanelArn")
    public String controlPanelArn;
    public ListRoutingControlsPathParams withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
}