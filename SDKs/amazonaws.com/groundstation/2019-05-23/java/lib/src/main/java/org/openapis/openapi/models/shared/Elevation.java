/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Elevation - Elevation angle of the satellite in the sky during a contact.
 */
public class Elevation {
    @JsonProperty("unit")
    public AngleUnitsEnum unit;

    public Elevation withUnit(AngleUnitsEnum unit) {
        this.unit = unit;
        return this;
    }
    
    @JsonProperty("value")
    public Double value;

    public Elevation withValue(Double value) {
        this.value = value;
        return this;
    }
    
    public Elevation(@JsonProperty("unit") AngleUnitsEnum unit, @JsonProperty("value") Double value) {
        this.unit = unit;
        this.value = value;
  }
}
