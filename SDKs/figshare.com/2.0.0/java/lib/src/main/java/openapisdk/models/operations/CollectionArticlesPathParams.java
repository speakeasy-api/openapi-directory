package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionArticlesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public CollectionArticlesPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}