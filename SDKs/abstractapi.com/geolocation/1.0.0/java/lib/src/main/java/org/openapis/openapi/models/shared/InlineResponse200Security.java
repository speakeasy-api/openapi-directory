/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class InlineResponse200Security {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_vpn")
    public Boolean isVpn;

    public InlineResponse200Security withIsVpn(Boolean isVpn) {
        this.isVpn = isVpn;
        return this;
    }
    
    public InlineResponse200Security(){}
}
