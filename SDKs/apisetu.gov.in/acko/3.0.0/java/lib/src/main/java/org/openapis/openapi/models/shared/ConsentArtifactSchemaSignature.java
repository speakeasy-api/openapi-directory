/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsentArtifactSchemaSignature {
    @JsonProperty("signature")
    public String signature;

    public ConsentArtifactSchemaSignature withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    
    public ConsentArtifactSchemaSignature(@JsonProperty("signature") String signature) {
        this.signature = signature;
  }
}
