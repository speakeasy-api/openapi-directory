package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReactionForComment
 * Information about the reaction values provided by users on a comment.
**/
public class ReactionForComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reaction")
    public ReactionValueFormats reaction;
    public ReactionForComment withReaction(ReactionValueFormats reaction) {
        this.reaction = reaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactionUsers")
    public String[] reactionUsers;
    public ReactionForComment withReactionUsers(String[] reactionUsers) {
        this.reactionUsers = reactionUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reactionsFromDeletedUsersCount")
    public Long reactionsFromDeletedUsersCount;
    public ReactionForComment withReactionsFromDeletedUsersCount(Long reactionsFromDeletedUsersCount) {
        this.reactionsFromDeletedUsersCount = reactionsFromDeletedUsersCount;
        return this;
    }
}