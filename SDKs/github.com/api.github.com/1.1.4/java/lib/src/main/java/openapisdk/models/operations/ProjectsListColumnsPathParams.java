package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListColumnsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsListColumnsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}