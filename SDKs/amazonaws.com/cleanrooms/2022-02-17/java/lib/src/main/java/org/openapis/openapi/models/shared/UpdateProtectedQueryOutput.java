/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateProtectedQueryOutput - Success
 */
public class UpdateProtectedQueryOutput {
    @JsonProperty("protectedQuery")
    public ProtectedQuery protectedQuery;

    public UpdateProtectedQueryOutput withProtectedQuery(ProtectedQuery protectedQuery) {
        this.protectedQuery = protectedQuery;
        return this;
    }
    
    public UpdateProtectedQueryOutput(@JsonProperty("protectedQuery") ProtectedQuery protectedQuery) {
        this.protectedQuery = protectedQuery;
  }
}
