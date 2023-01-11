package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectUsernameProjectBuildNumCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=build_num")
    public Long buildNum;
    public PostProjectUsernameProjectBuildNumCancelPathParams withBuildNum(Long buildNum) {
        this.buildNum = buildNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public PostProjectUsernameProjectBuildNumCancelPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PostProjectUsernameProjectBuildNumCancelPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}