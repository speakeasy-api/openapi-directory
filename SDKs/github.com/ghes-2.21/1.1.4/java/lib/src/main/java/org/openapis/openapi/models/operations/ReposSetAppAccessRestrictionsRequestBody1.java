/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetAppAccessRestrictionsRequestBody1 {
    /**
     * apps parameter
     */
    @JsonProperty("apps")
    public String[] apps;

    public ReposSetAppAccessRestrictionsRequestBody1 withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
    
    public ReposSetAppAccessRestrictionsRequestBody1(@JsonProperty("apps") String[] apps) {
        this.apps = apps;
  }
}
