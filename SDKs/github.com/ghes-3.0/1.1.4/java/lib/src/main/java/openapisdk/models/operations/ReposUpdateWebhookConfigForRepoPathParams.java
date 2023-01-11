package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateWebhookConfigForRepoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public ReposUpdateWebhookConfigForRepoPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposUpdateWebhookConfigForRepoPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposUpdateWebhookConfigForRepoPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}