package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=kind")
    public String kind;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pattern")
    public String pattern;
    public GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams withPattern(String pattern) {
        this.pattern = pattern;
        return this;
    }
}