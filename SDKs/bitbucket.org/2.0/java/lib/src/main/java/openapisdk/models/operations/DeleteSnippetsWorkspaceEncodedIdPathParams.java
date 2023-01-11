package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSnippetsWorkspaceEncodedIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public DeleteSnippetsWorkspaceEncodedIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteSnippetsWorkspaceEncodedIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}