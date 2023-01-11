package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesCreatePathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesCreatePathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}