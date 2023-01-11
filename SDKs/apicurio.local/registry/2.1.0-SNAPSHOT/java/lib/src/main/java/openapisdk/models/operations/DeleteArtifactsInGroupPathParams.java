package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArtifactsInGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public DeleteArtifactsInGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}