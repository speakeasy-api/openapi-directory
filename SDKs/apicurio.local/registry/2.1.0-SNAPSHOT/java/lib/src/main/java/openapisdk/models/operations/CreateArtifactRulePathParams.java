package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public CreateArtifactRulePathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public CreateArtifactRulePathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}