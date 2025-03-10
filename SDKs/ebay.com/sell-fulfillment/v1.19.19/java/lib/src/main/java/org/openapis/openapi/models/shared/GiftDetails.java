/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GiftDetails - This type contains information about a digital gift card line item that was purchased as a gift and sent to the recipient by email.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; When retrieving information for a digital gift card that is more than 90 days old, the information returned in all fields will be masked.&lt;/span&gt;
 */
public class GiftDetails {
    /**
     * This field contains the gift message from the buyer to the gift recipient. This field is only returned if the buyer of the gift included a message for the gift.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;message&lt;/b&gt; that is returned will be masked for any order that is more than 90 days old. For example, H****************!&lt;/span&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GiftDetails withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * The email address of the gift recipient. The seller will send the digital gift card to this email address.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;recipientEmail&lt;/b&gt; that is returned will be masked for any order that is more than 90 days old. For example, j****@******.**m&lt;/span&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipientEmail")
    public String recipientEmail;
    public GiftDetails withRecipientEmail(String recipientEmail) {
        this.recipientEmail = recipientEmail;
        return this;
    }
    
    /**
     * The name of the buyer, which will appear on the email that is sent to the gift recipient.&lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; The &lt;b&gt;senderName&lt;/b&gt; that is returned will be masked for any order that is more than 90 days old. For example, J***********h.&lt;/span&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderName")
    public String senderName;
    public GiftDetails withSenderName(String senderName) {
        this.senderName = senderName;
        return this;
    }
    
}
