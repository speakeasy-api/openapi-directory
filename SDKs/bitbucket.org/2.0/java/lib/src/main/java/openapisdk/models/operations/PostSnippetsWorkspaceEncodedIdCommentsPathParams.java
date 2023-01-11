package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSnippetsWorkspaceEncodedIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public PostSnippetsWorkspaceEncodedIdCommentsPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PostSnippetsWorkspaceEncodedIdCommentsPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}