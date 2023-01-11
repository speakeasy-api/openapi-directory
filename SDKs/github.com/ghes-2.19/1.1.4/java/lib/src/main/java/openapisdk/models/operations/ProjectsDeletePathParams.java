package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsDeletePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}