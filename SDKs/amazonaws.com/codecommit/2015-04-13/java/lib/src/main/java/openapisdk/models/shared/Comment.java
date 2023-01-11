package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Comment
 * Returns information about a specific comment.
**/
public class Comment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorArn")
    public String authorArn;
    public Comment withAuthorArn(String authorArn) {
        this.authorArn = authorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerReactions")
    public String[] callerReactions;
    public Comment withCallerReactions(String[] callerReactions) {
        this.callerReactions = callerReactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public Comment withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentId")
    public String commentId;
    public Comment withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public Comment withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public Comment withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Comment withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inReplyTo")
    public String inReplyTo;
    public Comment withInReplyTo(String inReplyTo) {
        this.inReplyTo = inReplyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public Comment withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactionCounts")
    public java.util.Map<String, Long> reactionCounts;
    public Comment withReactionCounts(java.util.Map<String, Long> reactionCounts) {
        this.reactionCounts = reactionCounts;
        return this;
    }
}