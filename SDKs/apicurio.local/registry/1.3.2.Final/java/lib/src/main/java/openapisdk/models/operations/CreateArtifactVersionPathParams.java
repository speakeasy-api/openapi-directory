package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public CreateArtifactVersionPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}