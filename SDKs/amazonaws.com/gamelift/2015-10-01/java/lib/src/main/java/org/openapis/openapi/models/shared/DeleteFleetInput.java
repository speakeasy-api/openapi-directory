/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFleetInput {
    @JsonProperty("FleetId")
    public String fleetId;

    public DeleteFleetInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    
    public DeleteFleetInput(@JsonProperty("FleetId") String fleetId) {
        this.fleetId = fleetId;
  }
}
