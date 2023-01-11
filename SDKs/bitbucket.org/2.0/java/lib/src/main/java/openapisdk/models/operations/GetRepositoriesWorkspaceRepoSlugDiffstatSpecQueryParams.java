package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignore_whitespace")
    public Boolean ignoreWhitespace;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams withIgnoreWhitespace(Boolean ignoreWhitespace) {
        this.ignoreWhitespace = ignoreWhitespace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=merge")
    public Boolean merge;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams withMerge(Boolean merge) {
        this.merge = merge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=renames")
    public Boolean renames;
    public GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams withRenames(Boolean renames) {
        this.renames = renames;
        return this;
    }
}