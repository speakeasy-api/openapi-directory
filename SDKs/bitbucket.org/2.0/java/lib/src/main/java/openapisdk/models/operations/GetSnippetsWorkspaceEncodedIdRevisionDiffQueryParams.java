package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public GetSnippetsWorkspaceEncodedIdRevisionDiffQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
}