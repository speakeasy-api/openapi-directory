package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTeamsUsernameProjectsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PostTeamsUsernameProjectsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}