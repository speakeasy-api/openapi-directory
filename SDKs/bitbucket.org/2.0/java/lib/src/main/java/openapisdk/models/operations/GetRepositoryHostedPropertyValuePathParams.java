package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryHostedPropertyValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_key")
    public String appKey;
    public GetRepositoryHostedPropertyValuePathParams withAppKey(String appKey) {
        this.appKey = appKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=property_name")
    public String propertyName;
    public GetRepositoryHostedPropertyValuePathParams withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoryHostedPropertyValuePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoryHostedPropertyValuePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}