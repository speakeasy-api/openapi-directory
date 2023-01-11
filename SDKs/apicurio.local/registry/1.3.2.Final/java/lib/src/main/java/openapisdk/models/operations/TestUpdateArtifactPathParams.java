package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestUpdateArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public TestUpdateArtifactPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}