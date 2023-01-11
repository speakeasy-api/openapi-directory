package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionReserveHandlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionReserveHandlePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}