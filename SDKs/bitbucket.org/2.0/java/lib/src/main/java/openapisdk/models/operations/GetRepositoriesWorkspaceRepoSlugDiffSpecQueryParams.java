package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=binary")
    public Boolean binary;
    public GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams withBinary(Boolean binary) {
        this.binary = binary;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=context")
    public Long context;
    public GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams withContext(Long context) {
        this.context = context;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ignore_whitespace")
    public Boolean ignoreWhitespace;
    public GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams withIgnoreWhitespace(Boolean ignoreWhitespace) {
        this.ignoreWhitespace = ignoreWhitespace;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=merge")
    public Boolean merge;
    public GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams withMerge(Boolean merge) {
        this.merge = merge;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=renames")
    public Boolean renames;
    public GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams withRenames(Boolean renames) {
        this.renames = renames;
        return this;
    }
}