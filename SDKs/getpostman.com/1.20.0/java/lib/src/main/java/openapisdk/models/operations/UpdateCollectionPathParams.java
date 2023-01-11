package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_uid")
    public String collectionUid;
    public UpdateCollectionPathParams withCollectionUid(String collectionUid) {
        this.collectionUid = collectionUid;
        return this;
    }
}