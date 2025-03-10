/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VirtualInterfaces - Success
 */
public class VirtualInterfaces {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualInterfaces")
    public VirtualInterface[] virtualInterfaces;

    public VirtualInterfaces withVirtualInterfaces(VirtualInterface[] virtualInterfaces) {
        this.virtualInterfaces = virtualInterfaces;
        return this;
    }
    
    public VirtualInterfaces(){}
}
