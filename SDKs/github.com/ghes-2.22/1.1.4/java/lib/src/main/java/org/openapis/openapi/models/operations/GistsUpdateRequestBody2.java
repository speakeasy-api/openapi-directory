/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GistsUpdateRequestBody2 {
    /**
     * Description of the gist
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public GistsUpdateRequestBody2 withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Names of files to be updated
     */
    @JsonProperty("files")
    public java.util.Map<String, Object> files;

    public GistsUpdateRequestBody2 withFiles(java.util.Map<String, Object> files) {
        this.files = files;
        return this;
    }
    
    public GistsUpdateRequestBody2(@JsonProperty("files") java.util.Map<String, Object> files) {
        this.files = files;
  }
}
