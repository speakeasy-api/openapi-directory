/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DatabaseUpdateDocumentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DatabaseUpdateDocumentRequestBody requestBody;

    public DatabaseUpdateDocumentRequest withRequestBody(DatabaseUpdateDocumentRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * Collection unique ID. You can create a new collection with validation rules using the Database service [server integration](/docs/server/database#createCollection).
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=collectionId")
    public String collectionId;

    public DatabaseUpdateDocumentRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    
    /**
     * Document unique ID.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentId")
    public String documentId;

    public DatabaseUpdateDocumentRequest withDocumentId(String documentId) {
        this.documentId = documentId;
        return this;
    }
    
    public DatabaseUpdateDocumentRequest(@JsonProperty("collectionId") String collectionId, @JsonProperty("documentId") String documentId) {
        this.collectionId = collectionId;
        this.documentId = documentId;
  }
}
