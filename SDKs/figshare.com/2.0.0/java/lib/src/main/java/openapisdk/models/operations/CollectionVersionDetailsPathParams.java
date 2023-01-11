package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionVersionDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_id")
    public Long collectionId;
    public CollectionVersionDetailsPathParams withCollectionId(Long collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version_id")
    public Long versionId;
    public CollectionVersionDetailsPathParams withVersionId(Long versionId) {
        this.versionId = versionId;
        return this;
    }
}