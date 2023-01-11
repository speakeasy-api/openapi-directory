package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProjectResourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public ListProjectResourcesPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}