package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public UpdateProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}