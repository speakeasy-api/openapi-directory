package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTeamsUsernameProjectsProjectKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_key")
    public String projectKey;
    public PutTeamsUsernameProjectsProjectKeyPathParams withProjectKey(String projectKey) {
        this.projectKey = projectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PutTeamsUsernameProjectsProjectKeyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}