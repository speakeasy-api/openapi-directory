package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectDetailsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}