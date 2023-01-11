package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCommitHostedPropertyValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_key")
    public String appKey;
    public UpdateCommitHostedPropertyValuePathParams withAppKey(String appKey) {
        this.appKey = appKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit")
    public String commit;
    public UpdateCommitHostedPropertyValuePathParams withCommit(String commit) {
        this.commit = commit;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=property_name")
    public String propertyName;
    public UpdateCommitHostedPropertyValuePathParams withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public UpdateCommitHostedPropertyValuePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public UpdateCommitHostedPropertyValuePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}