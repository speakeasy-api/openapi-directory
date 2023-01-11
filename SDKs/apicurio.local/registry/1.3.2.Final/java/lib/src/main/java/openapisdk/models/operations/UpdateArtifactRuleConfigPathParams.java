package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactRuleConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public UpdateArtifactRuleConfigPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public UpdateArtifactRuleConfigRuleEnum rule;
    public UpdateArtifactRuleConfigPathParams withRule(UpdateArtifactRuleConfigRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}