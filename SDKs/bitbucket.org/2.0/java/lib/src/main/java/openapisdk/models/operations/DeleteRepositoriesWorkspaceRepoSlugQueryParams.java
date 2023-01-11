package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepositoriesWorkspaceRepoSlugQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=redirect_to")
    public String redirectTo;
    public DeleteRepositoriesWorkspaceRepoSlugQueryParams withRedirectTo(String redirectTo) {
        this.redirectTo = redirectTo;
        return this;
    }
}