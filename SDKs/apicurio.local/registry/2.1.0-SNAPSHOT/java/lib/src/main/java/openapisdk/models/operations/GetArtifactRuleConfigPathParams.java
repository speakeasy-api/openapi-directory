package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactRuleConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public GetArtifactRuleConfigPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GetArtifactRuleConfigPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public GetArtifactRuleConfigRuleEnum rule;
    public GetArtifactRuleConfigPathParams withRule(GetArtifactRuleConfigRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}