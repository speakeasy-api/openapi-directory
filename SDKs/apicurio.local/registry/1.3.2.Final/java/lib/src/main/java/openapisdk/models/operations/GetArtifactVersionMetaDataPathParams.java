package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactVersionMetaDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public GetArtifactVersionMetaDataPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public Long version;
    public GetArtifactVersionMetaDataPathParams withVersion(Long version) {
        this.version = version;
        return this;
    }
}