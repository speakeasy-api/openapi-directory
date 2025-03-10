/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ItemLocation - This type describes the physical location of an order.
 */
public class ItemLocation {
    /**
     * The two-letter &lt;a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank"&gt;ISO 3166&lt;/a&gt; code representing the country of the address. For implementation help, refer to &lt;a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'&gt;eBay API documentation&lt;/a&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public ItemLocation withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    
    /**
     * Indicates the geographical location of the item (along with the value in the &lt;strong&gt;countryCode&lt;/strong&gt; field). This field provides city, province, state, or similar information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ItemLocation withLocation(String location) {
        this.location = location;
        return this;
    }
    
    /**
     * The postal code of the address.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCode")
    public String postalCode;
    public ItemLocation withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    
}
