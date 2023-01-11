package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionPrivateLinkUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionPrivateLinkUpdatePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=link_id")
    public String linkId;
    public PrivateCollectionPrivateLinkUpdatePathParams withLinkId(String linkId) {
        this.linkId = linkId;
        return this;
    }
}