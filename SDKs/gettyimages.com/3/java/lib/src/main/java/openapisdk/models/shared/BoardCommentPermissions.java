package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoardCommentPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_add_comment")
    public Boolean canAddComment;
    public BoardCommentPermissions withCanAddComment(Boolean canAddComment) {
        this.canAddComment = canAddComment;
        return this;
    }
}