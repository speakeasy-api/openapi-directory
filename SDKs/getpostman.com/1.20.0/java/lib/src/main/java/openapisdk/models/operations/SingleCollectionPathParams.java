package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SingleCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_uid")
    public String collectionUid;
    public SingleCollectionPathParams withCollectionUid(String collectionUid) {
        this.collectionUid = collectionUid;
        return this;
    }
}