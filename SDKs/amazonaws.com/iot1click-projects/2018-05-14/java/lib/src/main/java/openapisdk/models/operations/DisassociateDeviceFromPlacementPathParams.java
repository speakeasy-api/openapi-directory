package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateDeviceFromPlacementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceTemplateName")
    public String deviceTemplateName;
    public DisassociateDeviceFromPlacementPathParams withDeviceTemplateName(String deviceTemplateName) {
        this.deviceTemplateName = deviceTemplateName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=placementName")
    public String placementName;
    public DisassociateDeviceFromPlacementPathParams withPlacementName(String placementName) {
        this.placementName = placementName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public DisassociateDeviceFromPlacementPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}