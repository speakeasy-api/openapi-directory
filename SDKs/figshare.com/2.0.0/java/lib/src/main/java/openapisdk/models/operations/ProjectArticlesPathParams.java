package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectArticlesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public ProjectArticlesPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}