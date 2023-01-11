package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListArtifactsInGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public ListArtifactsInGroupPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}