package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommentPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_delete_comment")
    public Boolean canDeleteComment;
    public CommentPermissions withCanDeleteComment(Boolean canDeleteComment) {
        this.canDeleteComment = canDeleteComment;
        return this;
    }
}