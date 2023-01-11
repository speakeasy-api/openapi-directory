package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionArticlesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionArticlesListPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}