package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_uid")
    public String collectionUid;
    public DeleteCollectionPathParams withCollectionUid(String collectionUid) {
        this.collectionUid = collectionUid;
        return this;
    }
}