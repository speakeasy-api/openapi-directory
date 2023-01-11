package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePlacementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=placementName")
    public String placementName;
    public DescribePlacementPathParams withPlacementName(String placementName) {
        this.placementName = placementName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public DescribePlacementPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}