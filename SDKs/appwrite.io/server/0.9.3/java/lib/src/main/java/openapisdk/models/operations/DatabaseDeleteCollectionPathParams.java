package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseDeleteCollectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseDeleteCollectionPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}