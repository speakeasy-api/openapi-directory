package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionAuthorsAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionAuthorsAddPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}