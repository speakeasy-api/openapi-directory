/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PostBundlesIdShareRequestBody {
    /**
     * Note to include in email.
     */
    @SpeakeasyMetadata("multipartForm:name=note")
    public String note;

    public PostBundlesIdShareRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    
    /**
     * A list of recipients to share this bundle with. Required unless `to` is used.
     */
    @SpeakeasyMetadata("multipartForm:name=recipients,json")
    public java.util.Map<String, Object>[] recipients;

    public PostBundlesIdShareRequestBody withRecipients(java.util.Map<String, Object>[] recipients) {
        this.recipients = recipients;
        return this;
    }
    
    /**
     * A list of email addresses to share this bundle with. Required unless `recipients` is used.
     */
    @SpeakeasyMetadata("multipartForm:name=to")
    public String[] to;

    public PostBundlesIdShareRequestBody withTo(String[] to) {
        this.to = to;
        return this;
    }
    
    public PostBundlesIdShareRequestBody(){}
}
