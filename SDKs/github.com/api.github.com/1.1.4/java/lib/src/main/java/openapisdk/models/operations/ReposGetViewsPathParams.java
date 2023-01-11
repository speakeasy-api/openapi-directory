package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetViewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetViewsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetViewsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}