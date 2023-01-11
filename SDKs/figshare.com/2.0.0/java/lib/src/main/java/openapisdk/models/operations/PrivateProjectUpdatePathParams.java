package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectUpdatePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}