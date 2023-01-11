package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectLeavePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectLeavePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}