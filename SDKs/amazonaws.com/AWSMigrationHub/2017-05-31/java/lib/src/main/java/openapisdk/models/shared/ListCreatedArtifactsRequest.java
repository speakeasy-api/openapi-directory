package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCreatedArtifactsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListCreatedArtifactsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonProperty("MigrationTaskName")
    public String migrationTaskName;
    public ListCreatedArtifactsRequest withMigrationTaskName(String migrationTaskName) {
        this.migrationTaskName = migrationTaskName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCreatedArtifactsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ProgressUpdateStream")
    public String progressUpdateStream;
    public ListCreatedArtifactsRequest withProgressUpdateStream(String progressUpdateStream) {
        this.progressUpdateStream = progressUpdateStream;
        return this;
    }
}