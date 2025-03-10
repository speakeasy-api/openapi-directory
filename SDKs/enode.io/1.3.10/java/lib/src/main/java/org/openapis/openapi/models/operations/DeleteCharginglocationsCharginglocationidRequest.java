/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DeleteCharginglocationsCharginglocationidRequest {
    /**
     * ID of the Charging Location
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chargingLocationId")
    public String chargingLocationId;

    public DeleteCharginglocationsCharginglocationidRequest withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
    
    public DeleteCharginglocationsCharginglocationidRequest(@JsonProperty("chargingLocationId") String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
  }
}
