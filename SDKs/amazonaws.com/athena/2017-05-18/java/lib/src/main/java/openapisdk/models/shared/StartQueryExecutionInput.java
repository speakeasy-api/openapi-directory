package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartQueryExecutionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartQueryExecutionInput withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryExecutionContext")
    public QueryExecutionContext queryExecutionContext;
    public StartQueryExecutionInput withQueryExecutionContext(QueryExecutionContext queryExecutionContext) {
        this.queryExecutionContext = queryExecutionContext;
        return this;
    }
    @JsonProperty("QueryString")
    public String queryString;
    public StartQueryExecutionInput withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultConfiguration")
    public ResultConfiguration resultConfiguration;
    public StartQueryExecutionInput withResultConfiguration(ResultConfiguration resultConfiguration) {
        this.resultConfiguration = resultConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkGroup")
    public String workGroup;
    public StartQueryExecutionInput withWorkGroup(String workGroup) {
        this.workGroup = workGroup;
        return this;
    }
}