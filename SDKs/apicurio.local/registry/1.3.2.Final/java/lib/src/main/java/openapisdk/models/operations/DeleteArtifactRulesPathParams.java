package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArtifactRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public DeleteArtifactRulesPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}