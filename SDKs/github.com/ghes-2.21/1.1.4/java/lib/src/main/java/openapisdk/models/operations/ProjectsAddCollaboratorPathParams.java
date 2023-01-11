package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsAddCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectsAddCollaboratorPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ProjectsAddCollaboratorPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}