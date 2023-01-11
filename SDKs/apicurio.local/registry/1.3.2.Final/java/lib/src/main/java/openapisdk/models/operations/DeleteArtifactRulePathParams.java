package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArtifactRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public DeleteArtifactRulePathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=rule")
    public DeleteArtifactRuleRuleEnum rule;
    public DeleteArtifactRulePathParams withRule(DeleteArtifactRuleRuleEnum rule) {
        this.rule = rule;
        return this;
    }
}