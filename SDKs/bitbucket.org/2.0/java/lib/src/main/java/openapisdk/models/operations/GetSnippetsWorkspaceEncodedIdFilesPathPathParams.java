package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsWorkspaceEncodedIdFilesPathPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public GetSnippetsWorkspaceEncodedIdFilesPathPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=path")
    public String path;
    public GetSnippetsWorkspaceEncodedIdFilesPathPathParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetSnippetsWorkspaceEncodedIdFilesPathPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}