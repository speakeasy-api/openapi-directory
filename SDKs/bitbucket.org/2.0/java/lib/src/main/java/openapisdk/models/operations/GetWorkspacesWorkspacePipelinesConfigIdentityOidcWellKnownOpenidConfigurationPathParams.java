package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}