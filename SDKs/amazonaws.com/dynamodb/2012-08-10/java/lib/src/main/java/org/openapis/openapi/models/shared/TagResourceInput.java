/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagResourceInput {
    @JsonProperty("ResourceArn")
    public String resourceArn;

    public TagResourceInput withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    
    @JsonProperty("Tags")
    public Tag[] tags;

    public TagResourceInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    
    public TagResourceInput(@JsonProperty("ResourceArn") String resourceArn, @JsonProperty("Tags") Tag[] tags) {
        this.resourceArn = resourceArn;
        this.tags = tags;
  }
}
