package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignProjectResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public AssignProjectResourcesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}