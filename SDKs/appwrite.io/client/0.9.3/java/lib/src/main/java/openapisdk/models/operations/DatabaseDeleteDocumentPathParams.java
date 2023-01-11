package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseDeleteDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;
    public DatabaseDeleteDocumentPathParams withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;
    public DatabaseDeleteDocumentPathParams withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
}