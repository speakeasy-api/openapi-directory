package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPrivateLinkDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionPrivateLinkDeletePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public PrivateCollectionPrivateLinkDeletePathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
}