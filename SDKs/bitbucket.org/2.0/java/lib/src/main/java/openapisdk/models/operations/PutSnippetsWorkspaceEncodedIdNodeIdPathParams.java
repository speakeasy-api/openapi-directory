package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSnippetsWorkspaceEncodedIdNodeIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encoded_id")
    public String encodedId;
    public PutSnippetsWorkspaceEncodedIdNodeIdPathParams withEncodedId(String encodedId) {
        this.encodedId = encodedId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=node_id")
    public String nodeId;
    public PutSnippetsWorkspaceEncodedIdNodeIdPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutSnippetsWorkspaceEncodedIdNodeIdPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}