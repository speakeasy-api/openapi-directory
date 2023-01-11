package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMigrationTasksResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MigrationTaskSummaryList")
    public MigrationTaskSummary[] migrationTaskSummaryList;
    public ListMigrationTasksResult withMigrationTaskSummaryList(MigrationTaskSummary[] migrationTaskSummaryList) {
        this.migrationTaskSummaryList = migrationTaskSummaryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListMigrationTasksResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}