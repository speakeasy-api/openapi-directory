package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public GetLatestArtifactPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}