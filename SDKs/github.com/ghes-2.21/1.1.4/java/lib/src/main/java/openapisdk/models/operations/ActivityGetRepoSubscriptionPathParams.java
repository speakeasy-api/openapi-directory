package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityGetRepoSubscriptionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActivityGetRepoSubscriptionPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActivityGetRepoSubscriptionPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}