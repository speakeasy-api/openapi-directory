package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public GetArtifactUrlPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}