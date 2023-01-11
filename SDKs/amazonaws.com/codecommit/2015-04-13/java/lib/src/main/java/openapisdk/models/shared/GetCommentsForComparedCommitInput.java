package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCommentsForComparedCommitInput {
    @JsonProperty("afterCommitId")
    public String afterCommitId;
    public GetCommentsForComparedCommitInput withAfterCommitId(String afterCommitId) {
        this.afterCommitId = afterCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeCommitId")
    public String beforeCommitId;
    public GetCommentsForComparedCommitInput withBeforeCommitId(String beforeCommitId) {
        this.beforeCommitId = beforeCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetCommentsForComparedCommitInput withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetCommentsForComparedCommitInput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public GetCommentsForComparedCommitInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}