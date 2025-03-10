/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRequest - A container for a Delete BatchWrite request
 */
public class DeleteRequest {
    @JsonProperty("Key")
    public Key key;

    public DeleteRequest withKey(Key key) {
        this.key = key;
        return this;
    }
    
    public DeleteRequest(@JsonProperty("Key") Key key) {
        this.key = key;
  }
}
