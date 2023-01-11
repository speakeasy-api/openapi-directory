package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseUpdateDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseUpdateDocumentPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public DatabaseUpdateDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}