package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Message
 * Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.
**/
public class Message {
    @JsonProperty("Body")
    public Body body;
    public Message withBody(Body body) {
        this.body = body;
        return this;
    }
    @JsonProperty("Subject")
    public Content subject;
    public Message withSubject(Content subject) {
        this.subject = subject;
        return this;
    }
}