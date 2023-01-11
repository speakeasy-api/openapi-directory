package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePlacementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public CreatePlacementPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}