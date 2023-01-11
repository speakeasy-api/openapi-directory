package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePullRequestHostedPropertyValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_key")
    public String appKey;
    public UpdatePullRequestHostedPropertyValuePathParams withAppKey(String appKey) {
        this.appKey = appKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=property_name")
    public String propertyName;
    public UpdatePullRequestHostedPropertyValuePathParams withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pullrequest_id")
    public String pullrequestId;
    public UpdatePullRequestHostedPropertyValuePathParams withPullrequestId(String pullrequestId) {
        this.pullrequestId = pullrequestId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public UpdatePullRequestHostedPropertyValuePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public UpdatePullRequestHostedPropertyValuePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}