package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactMetaDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public UpdateArtifactMetaDataPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}