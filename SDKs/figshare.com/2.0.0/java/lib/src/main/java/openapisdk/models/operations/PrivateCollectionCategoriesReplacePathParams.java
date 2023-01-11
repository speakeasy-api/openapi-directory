package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCategoriesReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionCategoriesReplacePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}