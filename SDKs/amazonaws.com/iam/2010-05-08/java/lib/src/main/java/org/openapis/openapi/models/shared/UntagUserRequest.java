/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UntagUserRequest {
    
    public String[] tagKeys;

    public UntagUserRequest withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    
    
    public String userName;

    public UntagUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    
    public UntagUserRequest(@JsonProperty("TagKeys") String[] tagKeys, @JsonProperty("UserName") String userName) {
        this.tagKeys = tagKeys;
        this.userName = userName;
  }
}
