/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCollectionRequest {
    @JsonProperty("CollectionId")
    public String collectionId;

    public DeleteCollectionRequest withCollectionId(String collectionId) {
        this.collectionId = collectionId;
        return this;
    }
    
    public DeleteCollectionRequest(@JsonProperty("CollectionId") String collectionId) {
        this.collectionId = collectionId;
  }
}
