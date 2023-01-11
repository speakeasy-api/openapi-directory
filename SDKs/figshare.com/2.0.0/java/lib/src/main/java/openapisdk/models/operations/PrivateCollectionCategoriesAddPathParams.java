package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCategoriesAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionCategoriesAddPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}