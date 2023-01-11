package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectNoteDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=note_id")
    public Long noteId;
    public PrivateProjectNoteDeletePathParams withNoteId(Long noteId) {
        this.noteId = noteId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectNoteDeletePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}