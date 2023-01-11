package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCategoryDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=category_id")
    public Long categoryId;
    public PrivateCollectionCategoryDeletePathParams withCategoryId(Long categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionCategoryDeletePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}