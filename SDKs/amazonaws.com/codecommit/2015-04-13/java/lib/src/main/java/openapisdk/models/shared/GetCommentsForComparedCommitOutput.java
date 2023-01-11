package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCommentsForComparedCommitOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentsForComparedCommitData")
    public CommentsForComparedCommit[] commentsForComparedCommitData;
    public GetCommentsForComparedCommitOutput withCommentsForComparedCommitData(CommentsForComparedCommit[] commentsForComparedCommitData) {
        this.commentsForComparedCommitData = commentsForComparedCommitData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetCommentsForComparedCommitOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}