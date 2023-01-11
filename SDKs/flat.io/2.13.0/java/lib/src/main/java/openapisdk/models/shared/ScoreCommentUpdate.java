package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreCommentUpdate
 * Update of a comment
**/
public class ScoreCommentUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public ScoreCommentUpdate withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public ScoreCommentContext context;
    public ScoreCommentUpdate withContext(ScoreCommentContext context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawComment")
    public String rawComment;
    public ScoreCommentUpdate withRawComment(String rawComment) {
        this.rawComment = rawComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public ScoreCommentUpdate withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}