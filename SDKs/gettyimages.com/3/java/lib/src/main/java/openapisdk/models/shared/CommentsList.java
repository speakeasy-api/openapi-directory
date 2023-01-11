package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommentsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Comment[] comments;
    public CommentsList withComments(Comment[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public BoardCommentPermissions permissions;
    public CommentsList withPermissions(BoardCommentPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
}