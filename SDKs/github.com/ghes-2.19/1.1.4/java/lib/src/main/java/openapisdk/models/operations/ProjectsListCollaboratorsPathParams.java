package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListCollaboratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsListCollaboratorsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}