package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionCategoriesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionCategoriesListPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}