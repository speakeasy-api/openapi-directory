package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAForkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collection_uid")
    public String collectionUid;
    public CreateAForkPathParams withCollectionUid(String collectionUid) {
        this.collectionUid = collectionUid;
        return this;
    }
}