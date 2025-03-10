/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteImportedKeyMaterialRequest {
    @JsonProperty("KeyId")
    public String keyId;

    public DeleteImportedKeyMaterialRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    
    public DeleteImportedKeyMaterialRequest(@JsonProperty("KeyId") String keyId) {
        this.keyId = keyId;
  }
}
