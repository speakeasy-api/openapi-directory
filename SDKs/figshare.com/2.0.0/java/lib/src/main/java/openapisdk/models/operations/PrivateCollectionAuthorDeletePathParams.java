package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionAuthorDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=author_id")
    public Long authorId;
    public PrivateCollectionAuthorDeletePathParams withAuthorId(Long authorId) {
        this.authorId = authorId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public PrivateCollectionAuthorDeletePathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}