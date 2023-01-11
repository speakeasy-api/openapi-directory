package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum format;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams withFormat(GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_depth")
    public Long maxDepth;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams withMaxDepth(Long maxDepth) {
        this.maxDepth = maxDepth;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}