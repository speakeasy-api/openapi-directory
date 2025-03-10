/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * SendMessageResult - The &lt;code&gt;MD5OfMessageBody&lt;/code&gt; and &lt;code&gt;MessageId&lt;/code&gt; elements.
 */
public class SendMessageResult {
    
    public String md5OfMessageAttributes;

    public SendMessageResult withMd5OfMessageAttributes(String md5OfMessageAttributes) {
        this.md5OfMessageAttributes = md5OfMessageAttributes;
        return this;
    }
    
    
    public String md5OfMessageBody;

    public SendMessageResult withMd5OfMessageBody(String md5OfMessageBody) {
        this.md5OfMessageBody = md5OfMessageBody;
        return this;
    }
    
    
    public String md5OfMessageSystemAttributes;

    public SendMessageResult withMd5OfMessageSystemAttributes(String md5OfMessageSystemAttributes) {
        this.md5OfMessageSystemAttributes = md5OfMessageSystemAttributes;
        return this;
    }
    
    
    public String messageId;

    public SendMessageResult withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    
    
    public String sequenceNumber;

    public SendMessageResult withSequenceNumber(String sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
    
    public SendMessageResult(){}
}
