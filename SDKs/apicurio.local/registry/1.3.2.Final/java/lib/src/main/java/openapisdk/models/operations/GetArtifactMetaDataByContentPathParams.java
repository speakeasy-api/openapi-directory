package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactMetaDataByContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public GetArtifactMetaDataByContentPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
}