package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionDetailsPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}