package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectUsernameProjectBuildNumArtifactsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=build_num")
    public Long buildNum;
    public GetProjectUsernameProjectBuildNumArtifactsPathParams withBuildNum(Long buildNum) {
        this.buildNum = buildNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public GetProjectUsernameProjectBuildNumArtifactsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetProjectUsernameProjectBuildNumArtifactsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}