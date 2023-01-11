package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revision")
    public String revision;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}