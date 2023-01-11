package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}