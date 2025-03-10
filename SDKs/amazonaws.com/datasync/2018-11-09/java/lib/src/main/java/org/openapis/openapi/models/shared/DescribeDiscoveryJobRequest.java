/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeDiscoveryJobRequest {
    @JsonProperty("DiscoveryJobArn")
    public String discoveryJobArn;

    public DescribeDiscoveryJobRequest withDiscoveryJobArn(String discoveryJobArn) {
        this.discoveryJobArn = discoveryJobArn;
        return this;
    }
    
    public DescribeDiscoveryJobRequest(@JsonProperty("DiscoveryJobArn") String discoveryJobArn) {
        this.discoveryJobArn = discoveryJobArn;
  }
}
