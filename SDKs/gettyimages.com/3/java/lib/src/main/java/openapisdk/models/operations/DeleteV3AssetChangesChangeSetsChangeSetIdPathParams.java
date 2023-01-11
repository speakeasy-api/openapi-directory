package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV3AssetChangesChangeSetsChangeSetIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=change-set-id")
    public Long changeSetId;
    public DeleteV3AssetChangesChangeSetsChangeSetIdPathParams withChangeSetId(Long changeSetId) {
        this.changeSetId = changeSetId;
        return this;
    }
}