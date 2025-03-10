/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NotifyEmailType - The notify email type.
 */
public class NotifyEmailType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HtmlBody")
    public String htmlBody;

    public NotifyEmailType withHtmlBody(String htmlBody) {
        this.htmlBody = htmlBody;
        return this;
    }
    
    @JsonProperty("Subject")
    public String subject;

    public NotifyEmailType withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextBody")
    public String textBody;

    public NotifyEmailType withTextBody(String textBody) {
        this.textBody = textBody;
        return this;
    }
    
    public NotifyEmailType(@JsonProperty("Subject") String subject) {
        this.subject = subject;
  }
}
