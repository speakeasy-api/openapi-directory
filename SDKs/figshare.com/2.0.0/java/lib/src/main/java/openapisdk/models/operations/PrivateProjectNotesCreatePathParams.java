package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectNotesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectNotesCreatePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}