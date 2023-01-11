package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionArticlesReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionArticlesReplacePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}