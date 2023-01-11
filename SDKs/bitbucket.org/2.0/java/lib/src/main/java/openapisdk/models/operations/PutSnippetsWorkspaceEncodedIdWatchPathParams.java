package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSnippetsWorkspaceEncodedIdWatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public PutSnippetsWorkspaceEncodedIdWatchPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutSnippetsWorkspaceEncodedIdWatchPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}