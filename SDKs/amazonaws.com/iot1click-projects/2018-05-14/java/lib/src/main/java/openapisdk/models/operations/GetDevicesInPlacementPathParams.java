package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicesInPlacementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=placementName")
    public String placementName;
    public GetDevicesInPlacementPathParams withPlacementName(String placementName) {
        this.placementName = placementName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public GetDevicesInPlacementPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}