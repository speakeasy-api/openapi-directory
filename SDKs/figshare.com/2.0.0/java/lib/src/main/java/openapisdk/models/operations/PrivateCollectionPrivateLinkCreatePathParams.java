package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPrivateLinkCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionPrivateLinkCreatePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}