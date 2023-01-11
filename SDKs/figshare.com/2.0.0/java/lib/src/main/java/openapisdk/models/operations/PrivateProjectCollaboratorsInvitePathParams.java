package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectCollaboratorsInvitePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectCollaboratorsInvitePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}