package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectCollaboratorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectCollaboratorsListPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}