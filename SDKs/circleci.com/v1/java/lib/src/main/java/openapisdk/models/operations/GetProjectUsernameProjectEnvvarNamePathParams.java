package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUsernameProjectEnvvarNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetProjectUsernameProjectEnvvarNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public GetProjectUsernameProjectEnvvarNamePathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetProjectUsernameProjectEnvvarNamePathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}