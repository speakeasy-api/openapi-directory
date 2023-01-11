package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionReserveDoiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionReserveDoiPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}