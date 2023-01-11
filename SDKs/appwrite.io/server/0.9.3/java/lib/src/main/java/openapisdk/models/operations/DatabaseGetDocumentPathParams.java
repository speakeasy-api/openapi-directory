package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseGetDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseGetDocumentPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public DatabaseGetDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}