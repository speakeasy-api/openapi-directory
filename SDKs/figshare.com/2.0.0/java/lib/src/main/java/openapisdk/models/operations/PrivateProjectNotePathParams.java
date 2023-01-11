package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectNotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=note_id")
    public Long noteId;
    public PrivateProjectNotePathParams withNoteId(Long noteId) {
        this.noteId = noteId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectNotePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}