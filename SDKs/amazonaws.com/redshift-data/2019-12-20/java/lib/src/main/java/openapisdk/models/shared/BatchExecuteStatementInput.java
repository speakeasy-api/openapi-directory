package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchExecuteStatementInput {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public BatchExecuteStatementInput withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonProperty("Database")
    public String database;
    public BatchExecuteStatementInput withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public BatchExecuteStatementInput withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public BatchExecuteStatementInput withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
    @JsonProperty("Sqls")
    public String[] sqls;
    public BatchExecuteStatementInput withSqls(String[] sqls) {
        this.sqls = sqls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementName")
    public String statementName;
    public BatchExecuteStatementInput withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WithEvent")
    public Boolean withEvent;
    public BatchExecuteStatementInput withWithEvent(Boolean withEvent) {
        this.withEvent = withEvent;
        return this;
    }
}