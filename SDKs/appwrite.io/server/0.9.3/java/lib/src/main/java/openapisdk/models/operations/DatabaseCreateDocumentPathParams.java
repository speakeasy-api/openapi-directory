package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseCreateDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseCreateDocumentPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
}