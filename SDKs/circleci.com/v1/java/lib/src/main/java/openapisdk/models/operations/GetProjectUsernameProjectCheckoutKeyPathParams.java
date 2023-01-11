package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUsernameProjectCheckoutKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public GetProjectUsernameProjectCheckoutKeyPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetProjectUsernameProjectCheckoutKeyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}