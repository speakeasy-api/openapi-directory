package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public GetProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}