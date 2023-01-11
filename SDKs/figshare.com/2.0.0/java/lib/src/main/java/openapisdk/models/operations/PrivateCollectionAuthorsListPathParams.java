package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionAuthorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionAuthorsListPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}