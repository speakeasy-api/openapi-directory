package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSnippetsWorkspaceEncodedIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public PutSnippetsWorkspaceEncodedIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutSnippetsWorkspaceEncodedIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}