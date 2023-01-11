package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposSetStatusCheckContextsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=branch")
    public String branch;
    public ReposSetStatusCheckContextsPathParams withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposSetStatusCheckContextsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposSetStatusCheckContextsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}