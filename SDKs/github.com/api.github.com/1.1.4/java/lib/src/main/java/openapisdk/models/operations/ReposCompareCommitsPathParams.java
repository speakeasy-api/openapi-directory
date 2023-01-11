package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCompareCommitsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=base")
    public String base;
    public ReposCompareCommitsPathParams withBase(String base) {
        this.base = base;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=head")
    public String head;
    public ReposCompareCommitsPathParams withHead(String head) {
        this.head = head;
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