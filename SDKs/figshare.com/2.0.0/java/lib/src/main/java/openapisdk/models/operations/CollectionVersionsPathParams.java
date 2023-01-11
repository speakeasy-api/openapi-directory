package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public CollectionVersionsPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}