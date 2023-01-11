package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactMetaDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public GetArtifactMetaDataPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public GetArtifactMetaDataPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}