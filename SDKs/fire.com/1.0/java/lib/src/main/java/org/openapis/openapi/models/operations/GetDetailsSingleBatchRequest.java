/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetDetailsSingleBatchRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=batchUuid")
    public String batchUuid;

    public GetDetailsSingleBatchRequest withBatchUuid(String batchUuid) {
        this.batchUuid = batchUuid;
        return this;
    }
    
    public GetDetailsSingleBatchRequest(@JsonProperty("batchUuid") String batchUuid) {
        this.batchUuid = batchUuid;
  }
}
