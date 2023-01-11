package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSafetyRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ControlPanelArn")
    public String controlPanelArn;
    public ListSafetyRulesPathParams withControlPanelArn(String controlPanelArn) {
        this.controlPanelArn = controlPanelArn;
        return this;
    }
}