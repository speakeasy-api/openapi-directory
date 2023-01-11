package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public String projectId;
    public PatchProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}