package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExecuteStatementInput {
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public ExecuteStatementInput withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonProperty("Database")
    public String database;
    public ExecuteStatementInput withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public ExecuteStatementInput withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public SqlParameter[] parameters;
    public ExecuteStatementInput withParameters(SqlParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public ExecuteStatementInput withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
    @JsonProperty("Sql")
    public String sql;
    public ExecuteStatementInput withSql(String sql) {
        this.sql = sql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementName")
    public String statementName;
    public ExecuteStatementInput withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WithEvent")
    public Boolean withEvent;
    public ExecuteStatementInput withWithEvent(Boolean withEvent) {
        this.withEvent = withEvent;
        return this;
    }
}