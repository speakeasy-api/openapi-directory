package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseListDocumentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseListDocumentsPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}