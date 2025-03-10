/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteStoreRequest {
    /**
     * Your store identifier
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;

    public DeleteStoreRequest withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    
    public DeleteStoreRequest(@JsonProperty("storeId") String storeId) {
        this.storeId = storeId;
  }
}
