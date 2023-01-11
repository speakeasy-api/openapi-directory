package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectDetailsPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}