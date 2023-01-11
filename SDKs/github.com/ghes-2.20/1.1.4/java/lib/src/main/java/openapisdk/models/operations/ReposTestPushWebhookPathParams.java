package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposTestPushWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hook_id")
    public Long hookId;
    public ReposTestPushWebhookPathParams withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposTestPushWebhookPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposTestPushWebhookPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}