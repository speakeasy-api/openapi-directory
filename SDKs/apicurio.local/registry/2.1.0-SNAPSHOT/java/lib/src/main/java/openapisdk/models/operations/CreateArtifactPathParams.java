package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public String groupId;
    public CreateArtifactPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}