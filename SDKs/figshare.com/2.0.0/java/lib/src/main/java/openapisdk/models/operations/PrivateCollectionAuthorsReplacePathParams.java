package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionAuthorsReplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionAuthorsReplacePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}