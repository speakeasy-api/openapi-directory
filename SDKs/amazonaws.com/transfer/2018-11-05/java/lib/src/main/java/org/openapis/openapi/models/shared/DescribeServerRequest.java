/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeServerRequest {
    @JsonProperty("ServerId")
    public String serverId;

    public DescribeServerRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    
    public DescribeServerRequest(@JsonProperty("ServerId") String serverId) {
        this.serverId = serverId;
  }
}
