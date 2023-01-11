package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectNotesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectNotesListPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}