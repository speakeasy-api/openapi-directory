package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCompareCommitsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=basehead")
    public String basehead;
    public ReposCompareCommitsPathParams withBasehead(String basehead) {
        this.basehead = basehead;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposCompareCommitsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposCompareCommitsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}