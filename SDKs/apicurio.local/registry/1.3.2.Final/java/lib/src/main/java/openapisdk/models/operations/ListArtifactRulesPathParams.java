package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactRulesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public ListArtifactRulesPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}