/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFleetLocationsInput {
    @JsonProperty("FleetId")
    public String fleetId;

    public DeleteFleetLocationsInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    
    @JsonProperty("Locations")
    public String[] locations;

    public DeleteFleetLocationsInput withLocations(String[] locations) {
        this.locations = locations;
        return this;
    }
    
    public DeleteFleetLocationsInput(@JsonProperty("FleetId") String fleetId, @JsonProperty("Locations") String[] locations) {
        this.fleetId = fleetId;
        this.locations = locations;
  }
}
