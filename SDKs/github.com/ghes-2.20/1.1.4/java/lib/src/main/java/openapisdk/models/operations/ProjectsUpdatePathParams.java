package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsUpdatePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}