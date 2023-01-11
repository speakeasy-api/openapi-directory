package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPrivateLinksListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionPrivateLinksListPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}