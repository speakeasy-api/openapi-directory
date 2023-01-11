package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryExecution
 * Information about a single instance of a query execution.
**/
public class QueryExecution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public EngineVersion engineVersion;
    public QueryExecution withEngineVersion(EngineVersion engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Query")
    public String query;
    public QueryExecution withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecutionContext")
    public QueryExecutionContext queryExecutionContext;
    public QueryExecution withQueryExecutionContext(QueryExecutionContext queryExecutionContext) {
        this.queryExecutionContext = queryExecutionContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecutionId")
    public String queryExecutionId;
    public QueryExecution withQueryExecutionId(String queryExecutionId) {
        this.queryExecutionId = queryExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultConfiguration")
    public ResultConfiguration resultConfiguration;
    public QueryExecution withResultConfiguration(ResultConfiguration resultConfiguration) {
        this.resultConfiguration = resultConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementType")
    public StatementTypeEnum statementType;
    public QueryExecution withStatementType(StatementTypeEnum statementType) {
        this.statementType = statementType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statistics")
    public QueryExecutionStatistics statistics;
    public QueryExecution withStatistics(QueryExecutionStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public QueryExecutionStatus status;
    public QueryExecution withStatus(QueryExecutionStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkGroup")
    public String workGroup;
    public QueryExecution withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}