package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageEntity
 * List Messages
**/
public class MessageEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public MessageEntity withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public MessageCommentEntity comments;
    public MessageEntity withComments(MessageCommentEntity comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public MessageEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public MessageEntity withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}