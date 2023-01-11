package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSchemasRequest {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public ListSchemasRequest withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectedDatabase")
    public String connectedDatabase;
    public ListSchemasRequest withConnectedDatabase(String connectedDatabase) {
        this.connectedDatabase = connectedDatabase;
        return this;
    }
    @JsonProperty("Database")
    public String database;
    public ListSchemasRequest withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public ListSchemasRequest withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListSchemasRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSchemasRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaPattern")
    public String schemaPattern;
    public ListSchemasRequest withSchemaPattern(String schemaPattern) {
        this.schemaPattern = schemaPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public ListSchemasRequest withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
}