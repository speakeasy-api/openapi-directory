package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTeamsUsernameProjectsProjectKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_key")
    public String projectKey;
    public DeleteTeamsUsernameProjectsProjectKeyPathParams withProjectKey(String projectKey) {
        this.projectKey = projectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public DeleteTeamsUsernameProjectsProjectKeyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}