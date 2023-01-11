package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTableRequest {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public DescribeTableRequest withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectedDatabase")
    public String connectedDatabase;
    public DescribeTableRequest withConnectedDatabase(String connectedDatabase) {
        this.connectedDatabase = connectedDatabase;
        return this;
    }
    @JsonProperty("Database")
    public String database;
    public DescribeTableRequest withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public DescribeTableRequest withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeTableRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeTableRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public String schema;
    public DescribeTableRequest withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public DescribeTableRequest withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Table")
    public String table;
    public DescribeTableRequest withTable(String table) {
        this.table = table;
        return this;
    }
}