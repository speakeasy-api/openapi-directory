package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspacePermissionsRepositoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetWorkspacesWorkspacePermissionsRepositoriesQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetWorkspacesWorkspacePermissionsRepositoriesQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}