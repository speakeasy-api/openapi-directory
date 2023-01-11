package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactId")
    public String artifactId;
    public UpdateArtifactPathParams withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public UpdateArtifactPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}