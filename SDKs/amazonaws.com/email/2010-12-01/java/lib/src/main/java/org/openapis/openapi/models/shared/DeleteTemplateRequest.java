/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteTemplateRequest - Represents a request to delete an email template. For more information, see the &lt;a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html"&gt;Amazon SES Developer Guide&lt;/a&gt;.
 */
public class DeleteTemplateRequest {
    
    public String templateName;

    public DeleteTemplateRequest withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    
    public DeleteTemplateRequest(@JsonProperty("TemplateName") String templateName) {
        this.templateName = templateName;
  }
}
