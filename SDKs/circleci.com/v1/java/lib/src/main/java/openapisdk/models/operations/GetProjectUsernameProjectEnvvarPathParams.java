package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUsernameProjectEnvvarPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public GetProjectUsernameProjectEnvvarPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetProjectUsernameProjectEnvvarPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}