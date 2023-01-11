package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseGetCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseGetCollectionPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}