/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;

    public ListTagsForResourceRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    
    public ListTagsForResourceRequest(@JsonProperty("ResourceArn") String resourceArn) {
        this.resourceArn = resourceArn;
  }
}
