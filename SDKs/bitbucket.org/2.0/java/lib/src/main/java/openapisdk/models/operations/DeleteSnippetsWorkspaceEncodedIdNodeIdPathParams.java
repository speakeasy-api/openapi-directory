package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}