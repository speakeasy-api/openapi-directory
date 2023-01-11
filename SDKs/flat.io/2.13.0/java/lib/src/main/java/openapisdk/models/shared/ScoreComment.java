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
 * ScoreComment
 * Comment added on a sheet music
**/
public class ScoreComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public ScoreComment withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ScoreCommentContext context;
    public ScoreComment withContext(ScoreCommentContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ScoreComment withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ScoreComment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mentions")
    public String[] mentions;
    public ScoreComment withMentions(String[] mentions) {
        this.mentions = mentions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modificationDate")
    public OffsetDateTime modificationDate;
    public ScoreComment withModificationDate(OffsetDateTime modificationDate) {
        this.modificationDate = modificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawComment")
    public String rawComment;
    public ScoreComment withRawComment(String rawComment) {
        this.rawComment = rawComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyTo")
    public String replyTo;
    public ScoreComment withReplyTo(String replyTo) {
        this.replyTo = replyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolved")
    public Boolean resolved;
    public ScoreComment withResolved(Boolean resolved) {
        this.resolved = resolved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedBy")
    public String resolvedBy;
    public ScoreComment withResolvedBy(String resolvedBy) {
        this.resolvedBy = resolvedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public ScoreComment withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public ScoreComment withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spam")
    public Boolean spam;
    public ScoreComment withSpam(Boolean spam) {
        this.spam = spam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ScoreCommentTypeEnum type;
    public ScoreComment withType(ScoreCommentTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public ScoreComment withUser(String user) {
        this.user = user;
        return this;
    }
}