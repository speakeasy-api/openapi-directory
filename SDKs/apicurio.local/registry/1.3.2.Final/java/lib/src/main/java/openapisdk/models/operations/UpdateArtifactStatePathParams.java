package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactStatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public UpdateArtifactStatePathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}