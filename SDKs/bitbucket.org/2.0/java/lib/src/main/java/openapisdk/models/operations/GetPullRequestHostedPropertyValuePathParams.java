package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPullRequestHostedPropertyValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_key")
    public String appKey;
    public GetPullRequestHostedPropertyValuePathParams withAppKey(String appKey) {
        this.appKey = appKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=property_name")
    public String propertyName;
    public GetPullRequestHostedPropertyValuePathParams withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pullrequest_id")
    public String pullrequestId;
    public GetPullRequestHostedPropertyValuePathParams withPullrequestId(String pullrequestId) {
        this.pullrequestId = pullrequestId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetPullRequestHostedPropertyValuePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetPullRequestHostedPropertyValuePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}