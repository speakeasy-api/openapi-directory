/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UsersDeleteEmailForAuthenticatedRequestBody1 - Deletes one or more email addresses from your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
 */
public class UsersDeleteEmailForAuthenticatedRequestBody1 {
    /**
     * Email addresses associated with the GitHub user account.
     */
    @JsonProperty("emails")
    public String[] emails;

    public UsersDeleteEmailForAuthenticatedRequestBody1 withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    
    public UsersDeleteEmailForAuthenticatedRequestBody1(@JsonProperty("emails") String[] emails) {
        this.emails = emails;
  }
}
