/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VerifyEmailIdentityRequest - Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the &lt;a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html"&gt;Amazon SES Developer Guide&lt;/a&gt;.
 */
public class VerifyEmailIdentityRequest {
    
    public String emailAddress;

    public VerifyEmailIdentityRequest withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    
    public VerifyEmailIdentityRequest(@JsonProperty("EmailAddress") String emailAddress) {
        this.emailAddress = emailAddress;
  }
}
