package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSnippetsWorkspaceEncodedIdWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public DeleteSnippetsWorkspaceEncodedIdWatchPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteSnippetsWorkspaceEncodedIdWatchPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}