package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftDataParameters
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
**/
public class RedshiftDataParameters {
    @JsonProperty("Database")
    public String database;
    public RedshiftDataParameters withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public RedshiftDataParameters withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretManagerArn")
    public String secretManagerArn;
    public RedshiftDataParameters withSecretManagerArn(String secretManagerArn) {
        this.secretManagerArn = secretManagerArn;
        return this;
    }
    @JsonProperty("Sql")
    public String sql;
    public RedshiftDataParameters withSql(String sql) {
        this.sql = sql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementName")
    public String statementName;
    public RedshiftDataParameters withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WithEvent")
    public Boolean withEvent;
    public RedshiftDataParameters withWithEvent(Boolean withEvent) {
        this.withEvent = withEvent;
        return this;
    }
}