package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatabasesRequest {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public ListDatabasesRequest withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonProperty("Database")
    public String database;
    public ListDatabasesRequest withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public ListDatabasesRequest withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListDatabasesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatabasesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public ListDatabasesRequest withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
}