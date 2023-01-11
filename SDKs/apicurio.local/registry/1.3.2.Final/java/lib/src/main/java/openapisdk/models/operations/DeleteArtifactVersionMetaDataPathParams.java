package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArtifactVersionMetaDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public DeleteArtifactVersionMetaDataPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public Long version;
    public DeleteArtifactVersionMetaDataPathParams withVersion(Long version) {
        this.version = version;
        return this;
    }
}