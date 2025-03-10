/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContactMethodRequest {
    @JsonProperty("protocol")
    public ContactProtocolEnum protocol;

    public DeleteContactMethodRequest withProtocol(ContactProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    
    public DeleteContactMethodRequest(@JsonProperty("protocol") ContactProtocolEnum protocol) {
        this.protocol = protocol;
  }
}
