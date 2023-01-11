package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCommentsForPullRequestOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentsForPullRequestData")
    public CommentsForPullRequest[] commentsForPullRequestData;
    public GetCommentsForPullRequestOutput withCommentsForPullRequestData(CommentsForPullRequest[] commentsForPullRequestData) {
        this.commentsForPullRequestData = commentsForPullRequestData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetCommentsForPullRequestOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}