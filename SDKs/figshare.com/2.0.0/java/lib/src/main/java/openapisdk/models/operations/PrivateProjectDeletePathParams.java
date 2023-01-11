package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectDeletePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}