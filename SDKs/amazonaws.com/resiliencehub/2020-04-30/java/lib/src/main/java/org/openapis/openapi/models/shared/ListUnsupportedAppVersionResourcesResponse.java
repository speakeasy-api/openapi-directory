/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListUnsupportedAppVersionResourcesResponse - Success
 */
public class ListUnsupportedAppVersionResourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListUnsupportedAppVersionResourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonProperty("resolutionId")
    public String resolutionId;

    public ListUnsupportedAppVersionResourcesResponse withResolutionId(String resolutionId) {
        this.resolutionId = resolutionId;
        return this;
    }
    
    @JsonProperty("unsupportedResources")
    public UnsupportedResource[] unsupportedResources;

    public ListUnsupportedAppVersionResourcesResponse withUnsupportedResources(UnsupportedResource[] unsupportedResources) {
        this.unsupportedResources = unsupportedResources;
        return this;
    }
    
    public ListUnsupportedAppVersionResourcesResponse(@JsonProperty("resolutionId") String resolutionId, @JsonProperty("unsupportedResources") UnsupportedResource[] unsupportedResources) {
        this.resolutionId = resolutionId;
        this.unsupportedResources = unsupportedResources;
  }
}
