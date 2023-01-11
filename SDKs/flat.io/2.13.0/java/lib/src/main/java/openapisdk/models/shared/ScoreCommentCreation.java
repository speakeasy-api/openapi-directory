package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreCommentCreation
 * Creation of a comment
**/
public class ScoreCommentCreation {
    @JsonProperty("comment")
    public String comment;
    public ScoreCommentCreation withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ScoreCommentContext context;
    public ScoreCommentCreation withContext(ScoreCommentContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mentions")
    public String[] mentions;
    public ScoreCommentCreation withMentions(String[] mentions) {
        this.mentions = mentions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawComment")
    public String rawComment;
    public ScoreCommentCreation withRawComment(String rawComment) {
        this.rawComment = rawComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyTo")
    public String replyTo;
    public ScoreCommentCreation withReplyTo(String replyTo) {
        this.replyTo = replyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public ScoreCommentCreation withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}