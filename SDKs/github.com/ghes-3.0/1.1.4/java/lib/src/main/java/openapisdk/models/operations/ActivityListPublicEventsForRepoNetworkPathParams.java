package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListPublicEventsForRepoNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActivityListPublicEventsForRepoNetworkPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActivityListPublicEventsForRepoNetworkPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}