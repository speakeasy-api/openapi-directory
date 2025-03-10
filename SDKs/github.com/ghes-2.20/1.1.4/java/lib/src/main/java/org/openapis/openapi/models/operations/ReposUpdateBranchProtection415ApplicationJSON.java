/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposUpdateBranchProtection415ApplicationJSON - Preview header missing
 */
public class ReposUpdateBranchProtection415ApplicationJSON {
    @JsonProperty("documentation_url")
    public String documentationUrl;

    public ReposUpdateBranchProtection415ApplicationJSON withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    
    @JsonProperty("message")
    public String message;

    public ReposUpdateBranchProtection415ApplicationJSON withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public ReposUpdateBranchProtection415ApplicationJSON(@JsonProperty("documentation_url") String documentationUrl, @JsonProperty("message") String message) {
        this.documentationUrl = documentationUrl;
        this.message = message;
  }
}
