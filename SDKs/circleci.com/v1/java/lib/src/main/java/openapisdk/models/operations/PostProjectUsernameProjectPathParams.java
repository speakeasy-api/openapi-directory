package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public PostProjectUsernameProjectPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PostProjectUsernameProjectPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}