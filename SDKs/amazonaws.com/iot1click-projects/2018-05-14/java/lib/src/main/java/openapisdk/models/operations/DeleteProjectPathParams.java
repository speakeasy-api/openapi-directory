package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectName")
    public String projectName;
    public DeleteProjectPathParams withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}