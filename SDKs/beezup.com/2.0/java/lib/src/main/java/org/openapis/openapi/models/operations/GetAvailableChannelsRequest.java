/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetAvailableChannelsRequest {
    /**
     * The store identifier
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeId")
    public String storeId;

    public GetAvailableChannelsRequest withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    
    public GetAvailableChannelsRequest(@JsonProperty("storeId") String storeId) {
        this.storeId = storeId;
  }
}
