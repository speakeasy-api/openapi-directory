/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SqsParameters - The templated target type for the Amazon SQS &lt;a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html"&gt; &lt;code&gt;SendMessage&lt;/code&gt; &lt;/a&gt; API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see &lt;a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html"&gt;Using the Amazon SQS message deduplication ID&lt;/a&gt; in the &lt;i&gt;Amazon SQS Developer Guide&lt;/i&gt;. 
 */
public class SqsParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageGroupId")
    public String messageGroupId;

    public SqsParameters withMessageGroupId(String messageGroupId) {
        this.messageGroupId = messageGroupId;
        return this;
    }
    
    public SqsParameters(){}
}
