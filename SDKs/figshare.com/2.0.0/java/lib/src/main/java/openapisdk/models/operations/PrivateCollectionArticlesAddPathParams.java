package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionArticlesAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionArticlesAddPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}