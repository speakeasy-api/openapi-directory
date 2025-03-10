/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;

    public GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 withId(Long id) {
        this.id = id;
        return this;
    }
    
    /**
     * Two character ISO code
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso2")
    public String iso2;

    public GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 withIso2(String iso2) {
        this.iso2 = iso2;
        return this;
    }
    
    /**
     * Country Name
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2 withName(String name) {
        this.name = name;
        return this;
    }
    
    public GetOrder200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2(){}
}
