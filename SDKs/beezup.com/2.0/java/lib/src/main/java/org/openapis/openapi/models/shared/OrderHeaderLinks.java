/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderHeaderLinks {
    @JsonProperty("self")
    public LinksGetOrderLink self;

    public OrderHeaderLinks withSelf(LinksGetOrderLink self) {
        this.self = self;
        return this;
    }
    
    public OrderHeaderLinks(@JsonProperty("self") LinksGetOrderLink self) {
        this.self = self;
  }
}
