/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorkteamRequest {
    @JsonProperty("WorkteamName")
    public String workteamName;

    public DescribeWorkteamRequest withWorkteamName(String workteamName) {
        this.workteamName = workteamName;
        return this;
    }
    
    public DescribeWorkteamRequest(@JsonProperty("WorkteamName") String workteamName) {
        this.workteamName = workteamName;
  }
}
