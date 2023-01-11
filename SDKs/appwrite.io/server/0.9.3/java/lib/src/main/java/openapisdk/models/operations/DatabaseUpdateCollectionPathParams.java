package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseUpdateCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseUpdateCollectionPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}