package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectCheckoutKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public PostProjectUsernameProjectCheckoutKeyPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PostProjectUsernameProjectCheckoutKeyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}