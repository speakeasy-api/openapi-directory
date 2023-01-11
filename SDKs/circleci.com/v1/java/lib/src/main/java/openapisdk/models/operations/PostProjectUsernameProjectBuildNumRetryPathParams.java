package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectBuildNumRetryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=build_num")
    public Long buildNum;
    public PostProjectUsernameProjectBuildNumRetryPathParams withBuildNum(Long buildNum) {
        this.buildNum = buildNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public PostProjectUsernameProjectBuildNumRetryPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PostProjectUsernameProjectBuildNumRetryPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}