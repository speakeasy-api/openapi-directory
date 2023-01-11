package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPublishPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionPublishPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}