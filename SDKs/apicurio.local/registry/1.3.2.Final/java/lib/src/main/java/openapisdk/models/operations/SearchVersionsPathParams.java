package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public SearchVersionsPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}