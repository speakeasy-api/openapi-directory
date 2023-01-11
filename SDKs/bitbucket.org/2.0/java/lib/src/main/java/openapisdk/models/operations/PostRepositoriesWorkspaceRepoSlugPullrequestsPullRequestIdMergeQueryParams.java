package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async")
    public Boolean async;
    public PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams withAsync(Boolean async) {
        this.async = async;
        return this;
    }
}