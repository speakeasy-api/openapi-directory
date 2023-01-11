package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public CollectionDetailsPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}