package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCommentReactionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetCommentReactionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("reactionsForComment")
    public ReactionForComment[] reactionsForComment;
    public GetCommentReactionsOutput withReactionsForComment(ReactionForComment[] reactionsForComment) {
        this.reactionsForComment = reactionsForComment;
        return this;
    }
}