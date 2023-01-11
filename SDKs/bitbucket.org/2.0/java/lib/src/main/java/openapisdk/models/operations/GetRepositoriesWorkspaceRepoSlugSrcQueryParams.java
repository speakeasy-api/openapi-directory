package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugSrcQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetRepositoriesWorkspaceRepoSlugSrcFormatEnum format;
    public GetRepositoriesWorkspaceRepoSlugSrcQueryParams withFormat(GetRepositoriesWorkspaceRepoSlugSrcFormatEnum format) {
        this.format = format;
        return this;
    }
}