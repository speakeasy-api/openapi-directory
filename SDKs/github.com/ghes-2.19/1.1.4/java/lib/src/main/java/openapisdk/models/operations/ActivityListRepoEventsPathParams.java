package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListRepoEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActivityListRepoEventsPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActivityListRepoEventsPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}