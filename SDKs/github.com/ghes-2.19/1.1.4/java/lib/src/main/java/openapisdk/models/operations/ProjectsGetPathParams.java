package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsGetPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}